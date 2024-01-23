"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

//Froala Editor
import FroalaEditor from "react-froala-wysiwyg";
import "froala-editor/css/froala_editor.pkgd.min.css";

// Alignment
import "froala-editor/js/plugins/align.min.js";

// Quote
import "froala-editor/js/plugins/quote.min.js";

// Paragraph-style
import "froala-editor/js/plugins/paragraph_style.min.js";

// Paragraph format
import "froala-editor/js/plugins/paragraph_format.min.js";

// Save
import "froala-editor/js/plugins/save.min.js";

// Quick insert
import "froala-editor/js/plugins/quick_insert.min.js";
import "froala-editor/css/plugins/quick_insert.min.css";

// Table
import "froala-editor/js/plugins/table.min.js";
import "froala-editor/css/plugins/table.min.css";

// Track changes
import "froala-editor/js/plugins/track_changes.min.js";

// Spell Checker
import "froala-editor/js/third_party/spell_checker.min.js";
import "froala-editor/css/third_party/spell_checker.min.css";

// Video Plugin
import "froala-editor/js/plugins/video.min.js";
import "froala-editor/css/plugins/video.min.css";

// Url Plugin
import "froala-editor/js/plugins/url.min.js";

// Link
import "froala-editor/js/plugins/link.min.js";

// Lists
import "froala-editor/js/plugins/lists.min.js";

// Inline style
import "froala-editor/js/plugins/inline_style.min.js";

// Inline class
import "froala-editor/js/plugins/inline_class.min.js";

// Line breaker
import "froala-editor/js/plugins/line_breaker.min.js";
import "froala-editor/css/plugins/line_breaker.min.css";

// Line Height
import "froala-editor/js/plugins/line_height.min.js";

// Character counter
import "froala-editor/js/plugins/char_counter.min.js";
import "froala-editor/css/plugins/char_counter.min.css";

// Code beautifier
import "froala-editor/js/plugins/code_beautifier.min.js";

// Code viewer
import "froala-editor/js/plugins/code_view.min.js";
import "froala-editor/css/plugins/code_view.min.css";

// Emoticons
import "froala-editor/js/plugins/emoticons.min.js";
import "froala-editor/css/plugins/emoticons.min.css";

// Embedly
import "froala-editor/js/third_party/embedly.min.js";
import "froala-editor/css/third_party/embedly.min.css";

// Draggable
import "froala-editor/js/plugins/draggable.min.js";
import "froala-editor/css/plugins/draggable.min.css";

// Colors
import "froala-editor/js/plugins/colors.min.js";
import "froala-editor/css/plugins/colors.min.css";

// Entities
import "froala-editor/js/plugins/entities.min.js";

//filesManager
// TODO: This needs to be studied
import "froala-editor/js/plugins/files_manager.min.js";

// file
import "froala-editor/js/plugins/file.min.js";
import "froala-editor/css/plugins/file.min.css";

//fontAwesome
import "froala-editor/js/third_party/font_awesome.min.js";
import "froala-editor/css/third_party/font_awesome.min.css";

// Help plugin
import "froala-editor/js/plugins/help.min.js";
import "froala-editor/css/plugins/help.min.css";

//fullscreen
import "froala-editor/js/plugins/fullscreen.min.js";
import "froala-editor/css/plugins/fullscreen.min.css";

// font size
import "froala-editor/js/plugins/font_size.min.js";

// font family
import "froala-editor/js/plugins/font_family.min.js";

// image
import "froala-editor/js/plugins/image.min.js";
import "froala-editor/css/plugins/image.min.css";

// image manager
import "froala-editor/js/plugins/image_manager.min.js";
import "froala-editor/css/plugins/image_manager.min.css";

// image tui
import "froala-editor/js/third_party/image_tui.min.js";
import "froala-editor/css/third_party/image_tui.min.css";

import "froala-editor/js/third_party/showdown.min.js";
import { toast } from "sonner";

const Editor = () => {
  const [zenMode, setZenMode] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [model, setModel] = useState(() => {
    return localStorage.getItem("savedHtml") || "";
  });
  console.log(zenMode);

  return (
    <div className="px-4">
      <h1 className="text-3xl my-10">Text Editor</h1>
      <Button className="my-3" onClick={() => setZenMode(!zenMode)}>
        Editor
      </Button>
      <div className="prose prose-lg pb-7">
        <FroalaEditor
          model={model}
          onModelChange={(e: string) => setModel(e)}
          config={{
            placeholderText: "Please type your content here",
            saveInterval: 2000,
            charCounterCount: true,
            charCounterMax: 50,
            events: {
              "charCounter.exceeded": function () {
                toast.error("You have exceeded the maximum character limit");
              },
              "save.before": function (html: string) {
                localStorage.setItem("savedHtml", html);
                toast.info("Saving...", {
                  duration: 1000,
                  position: "bottom-center",
                });
              },
              "save.after": function () {
                toast.success("Saved!");
              },
            },
          }}
          tag="textarea"
        />
      </div>
    </div>
  );
};

export default Editor;
