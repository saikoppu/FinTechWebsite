"use client" 

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from "@/components/Navbar"
import Footer from '@/components/Footer'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider>
          <Navbar />
           {children}
          <Footer />
        </ChakraProvider>
      </body>
    </html>
  )
}
