import ClassicEditor from "@ckeditor/ckeditor5-editor-classic/src/classiceditor";
import Essentials from "@ckeditor/ckeditor5-essentials/src/essentials";
import Paragraph from "@ckeditor/ckeditor5-paragraph/src/paragraph";
import Bold from "@ckeditor/ckeditor5-basic-styles/src/bold";
import Italic from "@ckeditor/ckeditor5-basic-styles/src/italic";

import Image from "@ckeditor/ckeditor5-image/src/image";
import InsertImage from "./src/plugin/InsertImage";

ClassicEditor.create(document.querySelector("#editor"), {
  plugins: [Essentials, Paragraph, Bold, Italic, Image, InsertImage],
  toolbar: ["bold", "italic", "insertImage"],
})
  .then((editor) => {
    console.log("Editor was initialized", editor);
    editor.model.document.on("change", () => {
      console.log("The document has changed!");
    });
    editor.model.document.on("change:data", () => {
      console.log("The data has changed!");
    });
  })
  .catch((error) => {
    console.error(error.stack);
  });
