"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { useRef, useState } from "react";

import GalleryImage from "@/components/gallery-image";
import ReactPhotoAlbumImage from "@/components/react-photo-album-image";
import ScrollArea from "@/components/scroll-area";
import { GALLERY_IMAGES } from "@/data/constants";
import { cn } from "@/lib/utils";
import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/columns.css";
import "react-photo-album/rows.css";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/styles.css";

export default function GalleryModal({ open, setOpen }) {
  const [selectedCategory, setSelectedCategory] = useState(GALLERY_IMAGES[0]);
  const [index, setIndex] = useState(-1);
  const thumbnailsRef = useRef(null);

  const currentCategory = GALLERY_IMAGES.find(
    (category) => category.name === selectedCategory.name
  );
  return (
    <>
      <Dialog
        open={open}
        onOpenChange={(newOpenState) => {
          if (!newOpenState) {
            // Check if the lightbox is open
            if (index >= 0) {
              // Close the lightbox instead
              setIndex(-1);
            } else {
              setOpen(false);
            }
          } else {
            setOpen(true);
          }
        }}
        modal={false}
        className="px-4"
      >
        <DialogContent className="flex flex-col max-w-[calc(100vw-100px)] h-[calc(100vh-100px)] pr-1">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">Photo Tour</DialogTitle>
            <div className="flex flex-wrap gap-2">
              {GALLERY_IMAGES.map((category) => (
                <Button
                  key={category.name}
                  variant="outline"
                  onClick={() => setSelectedCategory(category)}
                  className={cn(
                    selectedCategory.name === category.name &&
                      "bg-app-yellow text-black",
                    "hover:bg-app-yellow hover:text-black"
                  )}
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </DialogHeader>
          <Separator />
          <ScrollArea>
            <RowsPhotoAlbum
              photos={currentCategory.images}
              targetRowHeight={200}
              onClick={({ index: current }) => setIndex(current)}
              render={{ image: ReactPhotoAlbumImage }}
            />
          </ScrollArea>
          <Lightbox
            index={index}
            open={index >= 0}
            close={() => setIndex(-1)}
            plugins={[Thumbnails]}
            thumbnails={{ ref: thumbnailsRef }}
            on={{
              click: () => {
                (thumbnailsRef.current?.visible
                  ? thumbnailsRef.current?.hide
                  : thumbnailsRef.current?.show)?.();
              },
            }}
            slides={currentCategory.images}
            render={{ slide: GalleryImage }}
          />
        </DialogContent>
      </Dialog>
    </>
  );
}
