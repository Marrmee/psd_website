"use client"

import type React from "react"
import * as Dialog from "@radix-ui/react-dialog"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

interface InfoModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  message: React.ReactNode
  buttonText?: string
}

export function InfoModal({
  isOpen,
  onClose,
  title,
  message,
  buttonText = "Close",
}: InfoModalProps) {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-[90vw] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-xl border border-white/20 bg-white/10 p-6 text-white shadow-lg backdrop-blur-xl">
          <div className="flex items-start justify-between">
            <Dialog.Title className="text-xl font-bold">{title}</Dialog.Title>
            <Dialog.Close asChild>
              <button
                className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white/70 hover:bg-white/20 hover:text-white"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </Dialog.Close>
          </div>

          <Dialog.Description className="mt-4 text-white/80">{message}</Dialog.Description>

          <div className="mt-8 flex justify-end gap-4">
            <Button
              type="button"
              onClick={onClose}
              className="bg-white text-[#010737] hover:bg-white/90"
            >
              {buttonText}
            </Button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
} 