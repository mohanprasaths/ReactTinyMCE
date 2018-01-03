import React from 'react';
import TinyMCE from 'react-tinymce';

class App extends React.Component {
  handleEditorChange = (e) => {
    console.log('Tinymce Editor Content was updated:', e.target.getContent());
  }

  render() {
    return (
      <TinyMCE
        content="<p>This is the initial content of the editor</p>"
        config={{
          plugins : "safari,pagebreak,style,layer,table,save,advhr,advimage,advlink,emotions,images,iespell,inlinepopups,insertdatetime,preview,media,searchreplace,print,contextmenu,paste,directionality,fullscreen,noneditable,visualchars,nonbreaking,xhtmlxtras,template,link,image,code",
          toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
        }}
        onChange={this.handleEditorChange}
      />
    );
  }
}

export default App;
