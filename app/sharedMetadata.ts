import { Metadata } from "next";

export const sharedMetadata: Metadata = {
  title: "Next Journal | Unfiltered, Unstoppable, Unafraid.",
  description:
    "NextJournal – A fearless blogging platform built with Next.js. Share bold stories, unfiltered ideas, and authentic narratives. Your voice, your platform.",
  icons: {
    icon: [
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
      { url: "/icon.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/icon.png",
    shortcut: "/icon.png",
  },
};
