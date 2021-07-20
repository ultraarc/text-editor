import Plugin from "@ckeditor/ckeditor5-core/src/plugin";

import imageIcon from "@ckeditor/ckeditor5-core/theme/icons/image.svg";
import ButtonView from "@ckeditor/ckeditor5-ui/src/button/buttonview";

class InsertImage extends Plugin {
  init() {
    const editor = this.editor;
    console.log("init editor", this.editor);

    editor.ui.componentFactory.add("insertImage", (locale) => {
      console.log("locale", locale);
      const view = new ButtonView(locale);

      view.set({
        label: "Insert image",
        icon: imageIcon,
        tooltip: true,
      });

      // Callback executed once the image is clicked.
      view.on("execute", () => {
        const imageUrl = prompt("Image URL");
        console.log(imageUrl);
        editor.model.change((writer) => {
          const imageElement = writer.createElement("imageBlock", {
            src: imageUrl,
          });

          // Insert the image in the current selection location.
          editor.model.insertContent(
            imageElement,
            editor.model.document.selection
          );
        });
      });
      console.log("view", view);
      return view;
    });

    console.log("InsertImage was initialized");
  }
}

export default InsertImage;
