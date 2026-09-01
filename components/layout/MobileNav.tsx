"use client";

import React, { useState } from "react";
import { MobileHeader } from "./MobileHeader";
import { MobileDrawer } from "./MobileDrawer";
import { ContactSocialData } from "./NavLinks";

interface MobileNavProps {
  contactData?: ContactSocialData;
}

export function MobileNav({ contactData }: MobileNavProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <MobileHeader
        isOpen={mobileMenuOpen}
        onToggle={() => setMobileMenuOpen(!mobileMenuOpen)}
      />
      <MobileDrawer
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        contactData={contactData}
      />
    </>
  );
}
