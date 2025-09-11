// src/hooks/use-toast.ts
import { useCallback } from "react";

export type ToastType = "success" | "error" | "info";

const TOAST_CONTAINER_ID = "jarvis-toast-container";

function ensureContainer(): HTMLElement | null {
  if (typeof document === "undefined") return null;
  let container = document.getElementById(TOAST_CONTAINER_ID);
  if (!container) {
    container = document.createElement("div");
    container.id = TOAST_CONTAINER_ID;
    container.style.position = "fixed";
    container.style.bottom = "20px";
    container.style.right = "20px";
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.gap = "10px";
    container.style.zIndex = "9999";
    document.body.appendChild(container);
  }
  return container;
}

export function useToast() {
  const showToast = useCallback(
    (message: string, type: ToastType = "info", duration = 3000) => {
      const container = ensureContainer();
      if (!container) return;

      const toast = document.createElement("div");
      toast.textContent = message;
      toast.style.padding = "12px 18px";
      toast.style.borderRadius = "8px";
      toast.style.color = "#fff";
      toast.style.fontSize = "14px";
      toast.style.boxShadow = "0 4px 12px rgba(0,0,0,0.3)";
      toast.style.opacity = "0";
      toast.style.transform = "translateY(8px)";
      toast.style.transition = "opacity 0.25s ease, transform 0.25s ease";
      toast.style.cursor = "pointer";

      switch (type) {
        case "success":
          toast.style.backgroundColor = "#16a34a";
          break;
        case "error":
          toast.style.backgroundColor = "#dc2626";
          break;
        case "info":
        default:
          toast.style.backgroundColor = "#2563eb";
          break;
      }

      container.appendChild(toast);

      // trigger transition
      requestAnimationFrame(() => {
        toast.style.opacity = "1";
        toast.style.transform = "translateY(0)";
      });

      const hide = () => {
        toast.style.opacity = "0";
        toast.style.transform = "translateY(8px)";
        setTimeout(() => {
          toast.remove();
          if (container.childElementCount === 0) {
            container.remove();
          }
        }, 250);
      };

      const timeoutId = window.setTimeout(hide, duration);

      // allow click to close early
      toast.addEventListener("click", () => {
        clearTimeout(timeoutId);
        hide();
      });
    },
    []
  );

  return { showToast };
}
