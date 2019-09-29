Vue.use( CKEditor );
var app = new Vue({ 
    el: '#app',
    data: {
        editor: ClassicEditor,
        editorData: '<p>Hello, csharp corner!</p><br/><br/> <b>This is demo for ckeditor 5 with Vue Js</br>',
        editorConfig: {
            // The configuration of the editor.
        }
    }
});
