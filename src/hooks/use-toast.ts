
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast"
import {
  useToast as useToastPrimitive,
  type ToastActionElement,
  type ToastProps,
} from "@/components/ui/use-toast"

type ToasterToast = ToastProps & {
  id: string
  title?: React.ReactNode
  description?: React.ReactNode
  action?: ToastActionElement
}

const TOAST_LIMIT = 5
const TOAST_REMOVE_DELAY = 1000000

type ToastState = {
  toasts: ToasterToast[]
}

let count = 0

function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER
  return count.toString()
}

const toastState: ToastState = {
  toasts: [],
}

const listeners: Array<(state: ToastState) => void> = []

function addToRemoveQueue(toastId: string) {
  setTimeout(() => {
    toastState.toasts = toastState.toasts.filter(
      ({ id }) => id !== toastId,
    )
    listeners.forEach((listener) => {
      listener(toastState)
    })
  }, TOAST_REMOVE_DELAY)
}

export function toast(props: Omit<ToasterToast, "id">) {
  const id = genId()

  const update = (props: ToasterToast) =>
    (toastState.toasts = toastState.toasts.map((t) =>
      t.id === props.id ? { ...t, ...props } : t,
    ))
  const dismiss = () => (toastState.toasts = toastState.toasts.filter((t) => t.id !== id))

  toastState.toasts = [
    { id, ...props },
    ...toastState.toasts,
  ].slice(0, TOAST_LIMIT)

  addToRemoveQueue(id)

  listeners.forEach((listener) => {
    listener(toastState)
  })

  return {
    id,
    dismiss,
    update,
  }
}

export function useToast() {
  return useToastPrimitive({
    ...toastState,
    subscribe: (callback: (state: ToastState) => void) => {
      listeners.push(callback)
      return () => {
        const index = listeners.indexOf(callback)
        if (index > -1) {
          listeners.splice(index, 1)
        }
      }
    },
  })
}
