"use client";
import React from "react";

const formatTextToParagraphs = (text) => {
  if (!text) return [];

  // Split text into sentences based on punctuation marks (., !, ?)
  const sentences = text.split(/(?<=[.!?])\s+/);

  // Group sentences into paragraphs (every 3 sentences = 1 paragraph)
  const paragraphs = sentences.reduce((acc, sentence, index) => {
    if (index % 3 === 0) acc.push([]);
    acc[acc.length - 1].push(sentence);
    return acc;
  }, []);

  return paragraphs.map((paragraph, idx) => (
    <p key={idx} className="text-sm font-extralight mb-4 leading-relaxed text-gray-900">
      {paragraph.join(" ")}
    </p>
  ));
};

export default function DynamicContent({ content }) {
  return <div className="space-y-4">{formatTextToParagraphs(content)}</div>;
}