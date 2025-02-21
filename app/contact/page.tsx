'use client'

import Contact from "@/components/Contact/Contact";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense>
      <Contact />
    </Suspense>
  );
}
