"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import { Upload, Image as ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function VisualizerPage() {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedFiles(Array.from(e.target.files));
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent"
          >
            VISUALIZER
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Upload photos of your existing kitchen to start.
          </motion.p>
        </div>
      </section>

      {/* Upload Section */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative group"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-3xl opacity-20 group-hover:opacity-30 blur transition duration-500" />

            <div className="relative bg-gray-900/80 backdrop-blur-xl rounded-3xl p-12 border border-gray-800/50 hover:border-gray-700/50 transition-all duration-300">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20 mb-6">
                  <ImageIcon className="w-10 h-10 text-purple-400" />
                </div>

                <h2 className="text-2xl md:text-3xl font-bold mb-3 text-white">
                  UPLOAD YOUR KITCHEN PHOTOS
                </h2>

                <p className="text-gray-400 mb-8 max-w-md mx-auto">
                  Select multiple angles to visualize the full transformation.
                </p>

                <label htmlFor="file-upload" className="cursor-pointer">
                  <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 rounded-full font-semibold text-white uppercase tracking-wider transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50">
                    <Upload className="w-5 h-5" />
                    SELECT PHOTOS
                  </div>
                  <input
                    id="file-upload"
                    type="file"
                    multiple
                    accept="image/*"
                    className="hidden"
                    onChange={handleFileSelect}
                  />
                </label>

                {selectedFiles.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 text-sm text-gray-400"
                  >
                    {selectedFiles.length}{" "}
                    {selectedFiles.length === 1 ? "photo" : "photos"} selected
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              { title: "High Quality", desc: "Upload clear, well-lit photos" },
              {
                title: "Multiple Angles",
                desc: "Capture different viewpoints",
              },
              { title: "AI Processing", desc: "Instant visualization results" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800/50 hover:border-gray-700/50 transition-all duration-300"
              >
                <h3 className="font-bold text-lg mb-2 text-white">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="pt-12">
        <Footer />
      </div>
    </main>
  );
}
