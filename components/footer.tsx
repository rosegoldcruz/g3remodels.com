import { Facebook, Instagram, Youtube, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-white py-12">
      <div className="mx-auto max-w-5xl px-6">
        {/* Social Icons */}
        <div className="flex items-center justify-center gap-4">
          <a
            href="#"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-foreground/20 text-foreground transition-colors hover:border-foreground hover:bg-foreground hover:text-background"
            aria-label="Facebook"
          >
            <Facebook className="h-4 w-4" />
          </a>
          <a
            href="#"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-foreground/20 text-foreground transition-colors hover:border-foreground hover:bg-foreground hover:text-background"
            aria-label="Instagram"
          >
            <Instagram className="h-4 w-4" />
          </a>
          <a
            href="#"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-foreground/20 text-foreground transition-colors hover:border-foreground hover:bg-foreground hover:text-background"
            aria-label="YouTube"
          >
            <Youtube className="h-4 w-4" />
          </a>
          <a
            href="#"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-foreground/20 text-foreground transition-colors hover:border-foreground hover:bg-foreground hover:text-background"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          {/* Pinterest */}
          <a
            href="#"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-foreground/20 text-foreground transition-colors hover:border-foreground hover:bg-foreground hover:text-background"
            aria-label="Pinterest"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
            </svg>
          </a>
          {/* Houzz */}
          <a
            href="#"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-foreground/20 text-foreground transition-colors hover:border-foreground hover:bg-foreground hover:text-background"
            aria-label="Houzz"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.58 7.24V1L6 4.13V24h5.54v-8.24h5.92V24H23V7.24h-10.42zm0 6.54H12V12.3h.58v1.48z" />
            </svg>
          </a>
        </div>

        {/* Copyright and Links */}
        <div className="mt-8 text-center">
          <p className="text-xs text-muted-foreground">
            Copyright ©{new Date().getFullYear()} G³ Contracting. All Rights Reserved.
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            <a href="#" className="hover:text-foreground">
              Privacy Policy
            </a>
            {" · "}
            <a href="#contact" className="hover:text-foreground">
              Contact Us
            </a>
          </p>
          <p className="mt-2 text-xs text-muted-foreground">
            Family-Owned Since 2003
          </p>
        </div>
      </div>
    </footer>
  )
}
