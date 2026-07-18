import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";

type PdfModalProps = {
  isOpen: boolean;
  onClose: () => void;
  url: string;
};

export function PdfModal({ isOpen, onClose, url }: PdfModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050607]/90 p-4 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            className="relative h-[90vh] w-full max-w-5xl overflow-hidden border border-zinc-700 bg-zinc-950 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 z-10 border border-zinc-700 bg-zinc-950/80 p-3 text-zinc-200 transition-colors hover:border-amber-400 hover:text-amber-300"
              aria-label="关闭简历预览"
            >
              <X className="h-5 w-5" />
            </button>
            <object data={url} type="application/pdf" className="h-full w-full border-none">
              <div className="flex h-full flex-col items-center justify-center gap-4 text-zinc-400">
                <p>当前浏览器不支持直接预览 PDF。</p>
                <a href={url} download className="border border-amber-400 px-5 py-3 text-sm font-bold text-amber-300">
                  下载简历
                </a>
              </div>
            </object>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
