"use client";
import Loading from "@/components/loading";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useBook } from "@/contexts/book-context";
import { countries } from "@/data/countries";
import Axios from "@/lib/axios";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Elements,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { differenceInDays, format } from "date-fns";
import { ArrowLeft, Check, CloudMoon, Info, UserRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState, useRef } from "react";
import ReactCountryFlag from "react-country-flag";
import { useForm } from "react-hook-form";
import ReactSelect from "react-select";
import { toast } from "sonner";
import { z } from "zod";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const checkoutSchema = z.object({
  country: z.string().min(1, "Country is required"),
  firstName: z.string().min(1, "First Name is required"),
  lastName: z.string().min(1, "Last Name is required"),
  email: z.string().email("Invalid email address"),
  phoneCode: z.string().min(1, "Phone Code is required"),
  phone: z.string().min(7, "Phone number must be at least 7 digits"),
  address: z.string().min(1, "Address is required"),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  remarks: z.string(),
  purpose: z.string(),
  company: z.string(),
});

const CheckoutForm = ({ paymentId }) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      terms: false,
    },
  });

  const [isChecked, setIsChecked] = useState(false);

  const { bookData } = useBook();
  const router = useRouter();

  const stripe = useStripe();
  const elements = useElements();

  const [loading, setLoading] = useState(false);

  const onSubmit = async (formData) => {
    try {
      console.log("Form data:", formData);
      console.log("Book data:", bookData);
      const guestDetails = {
        name: formData.firstName + " " + formData.lastName,
        email: formData.email,
        phone: formData.phoneCode + formData.phone,
        address: formData.address,
        country: formData.country,
        city: formData.city,
        state: formData.state,
        remarks: formData.remarks,
        purpose: formData.purpose,
        company: formData.company,
      };
      setLoading(true);

      if (!stripe || !elements) {
        throw new Error("Stripe or elements not initialized.");
      }

      const { data } = await Axios.post("/bookings", {
        ...bookData,
        rateType: bookData.rateType.toLowerCase(), // Normalize rateType
        paymentId,
        guestDetails,
      });

      console.log("Booking response:", data);

      const { error } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${process.env.NEXT_PUBLIC_BASE_URL}/completion`,
        },
      });

      if (error) {
        console.error("Payment failed:", error.message);
        toast.error("Payment failed. Please try again.");
        setLoading(false);
      } else {
        console.log("Payment successful:", data);
        toast.success("Booking confirmed successfully!");
      }
    } catch (error) {
      console.error("Payment failed:", error);
      toast.error(error?.response?.data?.message || "Something went wrong");
      setLoading(false);
    }
  };

  const paymentElementOptions = {
    layout: "tabs",
  };

  const phoneCodeOptions = countries.map((country) => ({
    value: `${country.code} ${country.phoneCode}`,
    label: (
      <div className="flex items-center">
        <ReactCountryFlag
          countryCode={country.code}
          svg
          style={{
            width: "1.5em",
            height: "1.5em",
            marginRight: "0.5em",
          }}
        />
        {country.phoneCode}
      </div>
    ),
  }));

  const countryOptions = countries.map((country) => ({
    value: country.name,
    label: (
      <div className="flex items-center">
        <ReactCountryFlag
          countryCode={country.code}
          svg
          style={{
            width: "1.5em",
            height: "1.5em",
            marginRight: "0.5em",
          }}
        />
        {country.name}
      </div>
    ),
  }));

  const selectStyles = {
    control: (provided) => ({
      ...provided,
      border: "1px solid #d1d5db",
      borderRadius: "0.375rem",
      padding: "0",
      fontSize: "14px",
      boxShadow: "none",
      backgroundColor: "#F4F4EA",
      color: "#514941",
      "&:hover": {
        borderColor: "#9ca3af",
      },
    }),
    input: (provided) => ({
      ...provided,
      color: "#514941",
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "#9ca3af",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#514941",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? "#e5e7eb" : "#F4F4EA",
      color: "#514941",
      "&:hover": {
        backgroundColor: "#f3f4f6",
      },
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: "#F4F4EA",
    }),
    menuList: (provided) => ({
      ...provided,
      backgroundColor: "#F4F4EA",
    }),
  };

  return (
    <div className="bg-[#F4F4EA] pt-10">
      <div className="container max-w-6xl mx-auto px-4 py-10 md:py-10">
        <Button
          variant="outline"
          className="mb-4 rounded-full"
          onClick={() => router.back()}
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Book
        </Button>
        <form onSubmit={(onSubmit)}>
          <div className="flex flex-col md:flex-row gap-10 mt-2">
            <div className="flex-1">
              <div className="flex flex-col gap-4 mb-5">
                <div className="bg-[#EBE7DC] p-4 sm:p-6 rounded-md shadow-sm">
                  <h3 className="text-[#514941] text-base sm:text-sm mb-4 border-b-2 border-[#514941] pb-2">
                    Guest Details
                  </h3>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="flex flex-col gap-2">
                      <Label
                        htmlFor="firstName"
                        className="bhandleSubmitlock text-[#514941] text-sm font-medium mb-2"
                      >
                        First Name <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        type="text"
                        id="firstName"
                        className="w-full p-2 border rounded placeholder:text-[#9ca3af] text-sm bg-[#F4F4EA] text-[#514941]"
                        {...register("firstName")}
                      />
                      {errors.firstName && (
                        <p className="text-red-500 text-sm">
                          {errors.firstName.message}
                        </p>
                      )}
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label
                        htmlFor="lastName"
                        className="block text-[#514941] text-sm font-medium mb-2"
                      >
                        Last Name <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        type="text"
                        id="lastName"
                        className="w-full p-2 border rounded placeholder:text-[#9ca3af] text-sm bg-[#F4F4EA] text-[#514941]"
                        {...register("lastName")}
                      />
                      {errors.lastName && (
                        <p className="text-red-500 text-sm">
                          {errors.lastName.message}
                        </p>
                      )}
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label
                        htmlFor="email"
                        className="block text-[#514941] text-sm font-medium mb-2"
                      >
                        Email <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        type="email"
                        id="email"
                        className="w-full p-2 border rounded placeholder:text-[#9ca3af] text-sm bg-[#F4F4EA] text-[#514941]"
                        {...register("email")}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label
                        htmlFor="phone"
                        className="block text-[#514941] text-sm font-medium mb-2"
                      >
                        Phone <span className="text-red-500">*</span>
                      </Label>
                      <div className="flex items-center gap-2 w-full">
                        <ReactSelect
                          id="phoneCode"
                          options={phoneCodeOptions}
                          onChange={(selectedOption) =>
                            setValue("phoneCode", selectedOption.value)
                          }
                          className="w-52"
                          placeholder="Select"
                          styles={selectStyles}
                        />
                        <Input
                          type="tel"
                          id="phone"
                          className="flex-1 p-2 border rounded placeholder:text-[#9ca3af] text-sm bg-[#F4F4EA] text-[#514941]"
                          {...register("phone")}
                        />
                      </div>
                      {errors.phoneCode && (
                        <p className="text-red-500 text-sm">
                          {errors.phoneCode.message}
                        </p>
                      )}
                      {errors.phone && (
                        <p className="text-red-500 text-sm">
                          {errors.phone.message}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="bg-[#EBE7DC] p-4 sm:p-6 rounded-md shadow-sm">
                  <h3 className="text-[#514941] text-base sm:text-sm mb-4 border-b-2 border-[#514941] pb-2">
                    Personal Information
                  </h3>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="flex col-span-2 flex-col gap-2">
                      <Label
                        htmlFor="country"
                        className="block text-[#514941] text-sm font-medium mb-2"
                      >
                        Country <span className="text-red-500">*</span>
                      </Label>
                      <ReactSelect
                        id="country"
                        options={countryOptions}
                        onChange={(selectedOption) =>
                          setValue("country", selectedOption.value)
                        }
                        className="w-full"
                        placeholder="Select a country"
                        styles={selectStyles}
                      />
                      {errors.country && (
                        <p className="text-red-500 text-sm">
                          {errors.country.message}
                        </p>
                      )}
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label
                        htmlFor="address"
                        className="block text-[#514941] text-sm font-medium mb-2"
                      >
                        Address <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        type="text"
                        id="address"
                        className="w-full p-2 border rounded placeholder:text-[#9ca3af] text-sm bg-[#F4F4EA] text-[#514941]"
                        {...register("address")}
                      />
                      {errors.address && (
                        <p className="text-red-500 text-sm">
                          {errors.address.message}
                        </p>
                      )}
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label
                        htmlFor="company"
                        className="block text-[#514941] text-sm font-medium mb-2"
                      >
                        Company
                      </Label>
                      <Input
                        type="text"
                        id="company"
                        className="w-full p-2 border rounded placeholder:text-[#9ca3af] text-sm bg-[#F4F4EA] text-[#514941]"
                        {...register("company")}
                      />
                      {errors.company && (
                        <p className="text-red-500 text-sm">
                          {errors.company.message}
                        </p>
                      )}
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label
                        htmlFor="city"
                        className="block text-[#514941] text-sm font-medium mb-2"
                      >
                        City/Location <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        type="text"
                        id="city"
                        className="w-full p-2 border rounded placeholder:text-[#9ca3af] text-sm bg-[#F4F4EA] text-[#514941]"
                        {...register("city")}
                      />
                      {errors.city && (
                        <p className="text-red-500 text-sm">
                          {errors.city.message}
                        </p>
                      )}
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label
                        htmlFor="purpose"
                        className="block text-[#514941] text-sm font-medium mb-2"
                      >
                        Purpose of stay
                      </Label>
                      <Input
                        type="text"
                        id="purpose"
                        className="w-full p-2 border rounded placeholder:text-[#9ca3af] text-sm bg-[#F4F4EA] text-[#514941]"
                        {...register("purpose")}
                      />
                      {errors.purpose && (
                        <p className="text-red-500 text-sm">
                          {errors.purpose.message}
                        </p>
                      )}
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label
                        htmlFor="state"
                        className="block text-[#514941] text-sm font-medium mb-2"
                      >
                        State/Region <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        type="text"
                        id="state"
                        className="w-full p-2 border rounded placeholder:text-[#9ca3af] text-sm bg-[#F4F4EA] text-[#514941]"
                        {...register("state")}
                      />
                      {errors.state && (
                        <p className="text-red-500 text-sm">
                          {errors.state.message}
                        </p>
                      )}
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label
                        htmlFor="remarks"
                        className="block text-[#514941] text-sm font-medium mb-2"
                      >
                        Special Requests/Remarks
                      </Label>
                      <Input
                        type="text"
                        id="remarks"
                        className="w-full p-2 border rounded placeholder:text-[#9ca3af] text-sm bg-[#F4F4EA] text-[#514941]"
                        {...register("remarks")}
                      />
                      {errors.remarks && (
                        <p className="text-red-500 text-sm">
                          {errors.remarks.message}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <PaymentElement options={paymentElementOptions} />
            </div>

            <div className="flex w-full md:w-80 flex-col">
              <div className="relative w-80 h-60 rounded-lg overflow-hidden">
                {bookData?.villaName?.includes("2-Bedroom") ? (
                  <img
                    src="/assets/images/bedroomvilla-3/bedroom25.jpg"
                    alt="villa"
                    className="object-cover rounded-tl-xl rounded-tr-xl"
                  />
                ) : (
                  <img
                    src="/assets/images/bedroomvilla-3/bedroom15.jpg"
                    alt="villa"
                    className="object-cover rounded-tl-xl rounded-tr-xl"
                  />
                )}
              </div>
              <p className="text-xl mt-2 text-[#514941]">
                {bookData.villaName}
              </p>
              <div className="flex flex-wrap items-center gap-2">
                <div className="flex items-center gap-2 bg-[#cc8823] rounded-2xl text-white px-2 py-1">
                  <Check className="w-4 h-4" />
                  <span className="capitalize">{bookData.rateType}</span>
                </div>
                {bookData.additionalServices.length > 0 &&
                  bookData.additionalServices.map((service) => (
                    <div
                      key={service.name}
                      className="flex items-center gap-2 bg-[#cc8823] rounded-2xl text-white px-2 py-1"
                    >
                      <span>{service.name}</span>
                    </div>
                  ))}
              </div>
              <div className="flex flex-col gap-2 mt-4">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-[#514941]">Rate:</p>
                  <p className="capitalize text-[#514941]">
                    {bookData.rateType}
                  </p>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <p className="text-[#514941]">Guests:</p>
                  <p className="text-[#514941]">{bookData.guests}</p>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <p className="text-[#514941]">Check In:</p>
                  <p className="text-[#514941]">
                    {bookData.startDate
                      ? format(bookData.startDate, "MMM d, yyyy")
                      : "N/A"}
                  </p>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <p className="text-[#514941]">Check Out:</p>
                  <p className="text-[#514941]">
                    {bookData.endDate
                      ? format(bookData.endDate, "MMM d, yyyy")
                      : "N/A"}
                  </p>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <p className="text-[#514941]">Nights:</p>
                  <p className="text-[#514941]">
                    {differenceInDays(bookData.endDate, bookData.startDate)}{" "}
                    nights
                  </p>
                </div>
              </div>
              <div className="h-px bg-gray-200 my-4"></div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-[#514941]">Stay Total:</p>
                  <p className="text-[#514941]">€{bookData.totalNightsPrice}</p>
                </div>
                {bookData.additionalServices.length > 0 &&
                  bookData.additionalServices.map((service) => (
                    <div
                      key={service.name}
                      className="flex items-center justify-between gap-2"
                    >
                      <p className="capitalize text-[#514941]">
                        {service.name}:
                      </p>
                      {service.each ? (
                        <Tooltip delayDuration={100}>
                          <TooltipTrigger>
                            <div className="flex items-center gap-1">
                              €
                              {service.price *
                                bookData.totalNights *
                                bookData.guests}
                              <Info className="w-3 h-3" />
                            </div>
                          </TooltipTrigger>
                          <TooltipContent className="text-base">
                            <div className="flex items-center gap-2">
                              €{service.price} x
                              <div className="flex items-center gap-1">
                                {bookData.totalNights}{" "}
                                <CloudMoon className="w-4 h-4" />
                              </div>
                              x
                              <div className="flex items-center gap-1">
                                {bookData.guests}{" "}
                                <UserRound className="w-4 h-4" />
                              </div>
                              = €
                              {service.price *
                                bookData.totalNights *
                                bookData.guests}
                            </div>
                          </TooltipContent>
                        </Tooltip>
                      ) : (
                        <Tooltip delayDuration={100}>
                          <TooltipTrigger>
                            <div className="flex items-center gap-1">
                              €{service.price * bookData.totalNights}
                              <Info className="w-3 h-3" />
                            </div>
                          </TooltipTrigger>
                          <TooltipContent className="text-base">
                            <div className="flex items-center gap-2">
                              €{service.price} x
                              <div className="flex items-center gap-1">
                                {bookData.totalNights}{" "}
                                <CloudMoon className="w-4 h-4" />
                              </div>
                              = €{service.price * bookData.totalNights}
                            </div>
                          </TooltipContent>
                        </Tooltip>
                      )}
                    </div>
                  ))}
              </div>
              <div className="h-px bg-gray-200 my-4"></div>
              <div className="flex items-center justify-between gap-2">
                <p className="text-xl font-bold text-[#514941]">Total:</p>
                <p className="text-3xl font-bold text-[#514941]">
                  €{bookData.totalPrice}
                </p>
              </div>
              <div className="text-sm text-right text-[#514941]">
                (Included VAT 9%)
              </div>

              <div className="flex items-center gap-2 mt-4">
                <Checkbox
                  id="terms"
                  className="size-8"
                  checked={isChecked}
                  onCheckedChange={() => setIsChecked(!isChecked)}
                />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium text-[#514941]"
                >
                  Before this booking, you agree to the{" "}
                  <Link href="/terms" className="underline text-[#616161]">
                    Terms & Conditions
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="underline text-[#616161]">
                    Privacy Policy
                  </Link>
                </label>
              </div>
              {errors.terms && (
                <p className="text-red-500 text-sm">{errors.terms.message}</p>
              )}
              <Button
                type="submit"
                className="w-full mt-5 h-12 bg-black text-white hover:bg-gray-800 text-lg rounded p-2"
                disabled={!isChecked || loading}
              >
                {loading ? "Loading..." : "Confirm & Book"}
              </Button>
              {loading && (
                <div className="text-sm text-center mt-2 text-gray-500">
                  Please don't refresh while payment is processing.
                </div>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default function CheckoutPage() {
  const { bookData } = useBook();
  const router = useRouter();
  const [clientSecret, setClientSecret] = useState(null);
  const [paymentIntentId, setPaymentIntentId] = useState(null);
  const hasRun = useRef(false);

  useEffect(() => {
    const fetchClientSecret = async () => {
      if (hasRun.current) return;
      hasRun.current = true;

      console.log("Book data for payment:", bookData);
      try {
        const { data } = await Axios.post("/payments/checkout", {
          bookData: {
            ...bookData,
            rateType: bookData.rateType.toLowerCase(),
            startDate: bookData.startDate.toISOString().split("T")[0],
            endDate: bookData.endDate.toISOString().split("T")[0],
          },
        });

        console.log("Payment intent response:", data);
        setClientSecret(data.clientSecret);
        setPaymentIntentId(data.paymentIntentId);
      } catch (error) {
        console.error("Error creating payment intent:", error);
        toast.error("Failed to initialize payment. Please try again.");
      }
    };

    if (!bookData.startDate || !bookData.endDate || !bookData.guests) {
      router.push("/");
    } else {
      fetchClientSecret();
    }
  }, [bookData, router]);

  const stripeOptions = useMemo(
    () => ({
      clientSecret,
      appearance: {
        theme: "stripe",
        labels: "floating",
      },
      loader: "auto",
    }),
    [clientSecret]
  );

  return (
    <>
      {!clientSecret ? (
        <Loading />
      ) : (
        <Elements options={stripeOptions} stripe={stripePromise}>
          <CheckoutForm paymentId={paymentIntentId} />
        </Elements>
      )}
    </>
  );
}
