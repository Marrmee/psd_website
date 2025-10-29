"use client"

import type React from "react"
import * as Dialog from "@radix-ui/react-dialog"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

interface ConfirmationModalProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
  title: string
  message: React.ReactNode
  confirmText?: string
  cancelText?: string
}

export function ConfirmationModal({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  confirmText = "Confirm",
  cancelText = "Cancel",
}: ConfirmationModalProps) {
  console.log('[MODAL] ConfirmationModal rendered. isOpen:', isOpen);
  
  const handleConfirm = () => {
    console.log('[MODAL] Confirm button clicked in modal');
    console.log('[MODAL] Calling onConfirm handler...');
    onConfirm()
    // Don't close the modal here - let the onConfirm handler decide when to close
  }
  
  const handleClose = () => {
    console.log('[MODAL] Close/Cancel button clicked');
    onClose();
  }

  return (
    <Dialog.Root open={isOpen} onOpenChange={(open) => {
      console.log('[MODAL] Dialog state changed to:', open);
      if (!open) {
        handleClose();
      }
    }}>
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
              variant="outline"
              onClick={handleClose}
              className="border-white/50 text-white hover:bg-white/10"
            >
              {cancelText}
            </Button>
            <Button
              type="button"
              onClick={handleConfirm}
              className="bg-white text-[#010737] hover:bg-white/90"
            >
              {confirmText}
            </Button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
} 