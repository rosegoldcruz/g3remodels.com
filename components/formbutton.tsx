"use client"

import { useEffect } from "react"
import Script from "next/script"

/**
 * Formspree Formbutton — floating contact widget.
 * Customized with G3 Remodels red brand (#C4001A) and matching fields.
 * Uses the free Formspree Formbutton script — zero backend required.
 */
export function Formbutton() {
  useEffect(() => {
    // Initialize formbutton once the script has loaded
    const init = () => {
      if (typeof window !== "undefined" && (window as any).formbutton) {
        ;(window as any).formbutton("create", {
          action: "https://formspree.io/f/mnjbqkwr",
          title: "Ready to Start Your Project?",
          description: "Tell us what you're looking for — we'll handle the rest.",
          fields: [
            {
              name: "name",
              type: "text",
              label: "Your Name",
              required: true,
              placeholder: "John Doe",
            },
            {
              name: "email",
              type: "email",
              label: "Email Address",
              required: true,
              placeholder: "john@example.com",
            },
            {
              name: "phone",
              type: "text",
              label: "Phone Number",
              placeholder: "(480) 555-1234",
            },
            {
              name: "message",
              type: "textarea",
              label: "What Are You Looking to Do?",
              required: true,
              placeholder: "Kitchen remodel, new cabinets, full renovation...",
            },
            {
              type: "submit",
              value: "Let's Go →",
            },
          ],
          styles: {
            fontFamily: '"Inter", sans-serif',
            button: {
              background: "#C4001A",
              color: "#ffffff",
              fontSize: "15px",
              boxShadow: "0 4px 20px rgba(196, 0, 26, 0.4)",
            },
            title: {
              background: "#C4001A",
              color: "#ffffff",
              letterSpacing: "0.03em",
            },
            description: {
              color: "#666666",
            },
            submitInput: {
              background: "#C4001A",
              color: "#ffffff",
              fontWeight: "600",
              letterSpacing: "0.03em",
            },
          },
        })
      }
    }

    // If formbutton is already loaded (e.g. cached), init immediately
    if (typeof window !== "undefined" && (window as any).formbutton) {
      init()
    } else {
      // Otherwise wait for the script onReady
      ;(window as any).__formbuttonInit = init
    }

    return () => {
      // Cleanup: remove formbutton elements on unmount
      if (typeof document !== "undefined") {
        const btn = document.getElementById("formbutton-button")
        const iframe = document.getElementById("formbutton-iframe")
        btn?.remove()
        iframe?.remove()
      }
    }
  }, [])

  return (
    <Script
      src="https://formspree.io/js/formbutton-v1.min.js"
      strategy="lazyOnload"
      onReady={() => {
        // Trigger init when script is ready
        if (typeof window !== "undefined") {
          const init = (window as any).__formbuttonInit
          if (init) {
            init()
            delete (window as any).__formbuttonInit
          } else if ((window as any).formbutton) {
            // Component mounted before script — re-init
            ;(window as any).formbutton("create", {
              action: "https://formspree.io/f/mnjbqkwr",
              title: "Ready to Start Your Project?",
              description: "Tell us what you're looking for — we'll handle the rest.",
              fields: [
                { name: "name", type: "text", label: "Your Name", required: true, placeholder: "John Doe" },
                { name: "email", type: "email", label: "Email Address", required: true, placeholder: "john@example.com" },
                { name: "phone", type: "text", label: "Phone Number", placeholder: "(480) 555-1234" },
                { name: "message", type: "textarea", label: "What Are You Looking to Do?", required: true, placeholder: "Kitchen remodel, new cabinets, full renovation..." },
                { type: "submit", value: "Let's Go →" },
              ],
              styles: {
                fontFamily: '"Inter", sans-serif',
                button: { background: "#C4001A", color: "#ffffff", fontSize: "15px", boxShadow: "0 4px 20px rgba(196, 0, 26, 0.4)" },
                title: { background: "#C4001A", color: "#ffffff", letterSpacing: "0.03em" },
                description: { color: "#666666" },
                submitInput: { background: "#C4001A", color: "#ffffff", fontWeight: "600", letterSpacing: "0.03em" },
              },
            })
          }
        }
      }}
    />
  )
}
