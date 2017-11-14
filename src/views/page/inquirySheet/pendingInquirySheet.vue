<template>
    <div>

        <!-- bidirectional data binding（双向数据绑定） -->
        <quill-editor v-model="content"
                      ref="myQuillEditor"
                      :options="editorOption"
                      @blur="onEditorBlur($event)"
                      @focus="onEditorFocus($event)"
                      @ready="onEditorReady($event)">
        </quill-editor>

        <!-- Or manually control the data synchronization（或手动控制数据流） -->
        <quill-editor :content="content"
                      :options="editorOption"
                      @change="onEditorChange($event)">
        </quill-editor>
    </div>
</template>
<script>
//    import { ImageImport } from '../modules/ImageImport.js'
//    import { ImageResize } from '../modules/ImageResize.js'
    // You can also register quill modules in the component
    import { quillEditor } from 'vue-quill-editor'

    export default {
        data () {
            return {
                content: '<h2>I am Example</h2>',
                editorOption: {
//                    modules: {
//                        toolbar: [
//                            [{ 'size': ['small', false, 'large'] }],
//                            ['bold', 'italic'],
//                            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
//                            ['link', 'image']
//                        ],
//                        history: {
//                            delay: 1000,
//                            maxStack: 50,
//                            userOnly: false
//                        },
//                        imageImport: true,
//                        imageResize: {
//                            displaySize: true
//                        }
//                    }
                }
            }
        },
        // if you need to manually control the data synchronization, parent component needs to explicitly emit an event instead of relying on implicit binding
        // 如果需要手动控制数据同步，父组件需要显式地处理changed事件
        methods: {
            onEditorBlur(editor) {
                console.log('editor blur!', editor)
            },
            onEditorFocus(editor) {
                console.log('editor focus!', editor)
            },
            onEditorReady(editor) {
                console.log('editor ready!', editor)
            },
            onEditorChange({ editor, html, text }) {
                console.log('editor change!', editor, html, text)
                this.content = html; // 加了这个之后 编辑器并不好编辑 ？？
            }
        },
        // get the current quill instace object.
        computed: {
            editor() {
                console.log('this.$refs', this.$refs)
                return this.$refs.myQuillEditor.quill
            }
        },
        mounted() {
            // you can use current editor object to do something(quill methods)
            console.log('this is current quill instance object', this.editor)
        },
        components: {
            quillEditor
        }
    }
</script>
<!--<script>-->
    <!--import { quillEditor } from 'vue-quill-editor'-->

    <!--export default {-->
        <!--data(){-->
            <!--return{-->

            <!--}-->
        <!--},-->
        <!--created(){-->
            <!--console.log('quillEditor', quillEditor)-->
        <!--},-->
        <!--methods:{-->

        <!--},-->
        <!--components: {-->
            <!--quillEditor-->
        <!--}-->
    <!--}-->

<!--</script>-->