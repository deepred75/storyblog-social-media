(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{494:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return r}));n(23),n(58),n(60),n(139),n(196),n(59);var o=function(e){return[{hid:"twitter:title",name:"twitter:title",content:e.title},{hid:"twitter:description",name:"twitter:description",content:e.description},{hid:"twitter:image",name:"twitter:image",content:e.image},{hid:"twitter:image:alt",name:"twitter:image:alt",content:e.imageAlt},{hid:"og:title",name:"og:title",content:e.title},{hid:"og:description",name:"og:description",content:e.description},{hid:"og:image",name:"og:image",content:e.image},{hid:"og:image:alt",name:"og:image:alt",content:e.imageAlt}]},r=function(text){return text.toLowerCase().split(" ").map((function(i){var e=i.split("");return e[0]=e[0].toUpperCase(),e.join("")})).join(" ")}},498:function(e,t,n){var content=n(518);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(31).default)("4c72c36b",content,!0,{sourceMap:!1})},517:function(e,t,n){"use strict";n(498)},518:function(e,t,n){var o=n(30)((function(i){return i[1]}));o.push([e.i,'/*purgecss start ignore*/\n.ql-editor{\n  padding:0;\n  font-size:16px;\n  border-radius:4px\n}\n.el-loading-parent--relative .ql-editor{\n  opacity:0\n}\n.postView{\n  color:#303133\n}\n.contentInput .ql-editor{\n  outline:1px dashed red;\n  outline-offset:12px\n}\n.descriptionInput textarea{\n  color:#303133;\n  background:transparent;\n  border:none;\n  padding:0;\n  overflow-y:hidden;\n  outline:1px dashed red;\n  outline-offset:10px;\n  font-size:16px;\n  line-height:1.5rem;\n  padding-top:1rem;\n  padding-bottom:1rem\n}\n.removeImageBtn:before{\n  content:"";\n  z-index:1;\n  opacity:.5;\n  position:absolute;\n  margin-left:-2rem;\n  height:100%;\n  width:100%;\n  --tw-bg-opacity:1;\n  background-color:rgba(239, 68, 68, var(--tw-bg-opacity))\n}\n\n/*purgecss end ignore*/',""]),o.locals={},e.exports=o},532:function(e,t,n){"use strict";n.r(t);var o=n(19),r=n(1),c=(n(28),n(23),n(58),n(106),n(17),n(39),n(40),n(493),n(280),n(38),n(53),n(68),n(87),n(42),n(54),n(24),n(55),n(494));function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var m={head:function(){return{title:Object(c.b)(this.post.title),meta:Object(c.a)({title:Object(c.b)(this.post.title),description:this.post.description,image:this.post.postImageURL,imageAlt:Object(c.b)(this.post.title)})}},data:function(){return{timeOptions:{weekday:"short",year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"},likeLoading:!1,bookmarkLoading:!1,editMode:!1,saveLoading:!1,hasPostChanged:!1,titleLimit:64,descriptionLimit:300,editorLoading:!1,commentContent:"",commentLimit:300,commentLoading:!1,forceUpdate:0,newPostImageFile:null,newPostImageURL:null,publishedP:null}},methods:{togglePublishedStatus:function(){this.publishedP=!this.publishedP},openDeleteModal:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.$prompt('Please enter the post slug<br> <b class="block text-red-500 overflow-hidden overflow-ellipsis">'.concat(e.post.slug,"</b>"),"Confirm Delete",{dangerouslyUseHTMLString:!0,confirmButtonText:"Delete",cancelButtonText:"Cancel",inputValidator:function(input){return input==e.post.slug},inputErrorMessage:"Slug is not correct."}).then(function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.value,t.next=3,e.$store.dispatch("post/deletePost",{ownerId:e.post.uid,slug:e.post.slug});case 3:e.$message({type:"success",message:"Post deleted successfully!"}),e.$router.push("/"+e.authUser.username);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){console.log(t),e.$message({type:"info",message:"Deleting post canceled."})}));case 1:case"end":return t.stop()}}),t)})))()},addComment:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.authUser){t.next=23;break}if(e.commentLoading){t.next=20;break}if(e.commentLoading=!0,!(e.commentContent.length<=e.commentLimit)){t.next=16;break}if(!(e.commentContent.length>0)){t.next=13;break}return n={uid:e.authUser.uid,parentId:e.$route.params.postSlug,content:e.commentContent,updateHistory:[{editedAt:Date.now(),content:e.commentContent}],upVotes:[],downVotes:[],voteCount:0,replyCount:0,createdAt:Date.now(),updatedAt:Date.now()},t.next=8,e.$store.dispatch("comment/addComment",{postOwnerId:e.user.uid,slug:e.$route.params.postSlug,commentData:n});case 8:e.commentContent="",e.forceUpdate+=1,e.post.commentCount+=1,t.next=14;break;case 13:e.$message.error("You should type something.");case 14:t.next=17;break;case 16:e.$message.error("You can't break the rules.");case 17:e.commentLoading=!1,t.next=21;break;case 20:e.$message.warning("Slow Down 😥");case 21:t.next=24;break;case 23:e.$message.error("You have to login to send a comment.");case 24:case"end":return t.stop()}}),t)})))()},saveChanges:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.saveLoading){t.next=15;break}if(e.saveLoading=!0,!(e.descriptionInput.length>0&&e.descriptionInput.length<=e.descriptionLimit)){t.next=11;break}return n={updatedAt:Date.now(),description:e.descriptionInput,content:e.$refs.editor.quill.getContents().ops,published:e.publishedP},t.next=6,e.$store.dispatch("post/updatePost",{postData:n,uid:e.post.uid,slug:e.post.slug,newPostImageFile:e.newPostImageFile});case 6:e.hasPostChanged=!1,e.$message.success("Post Updated Successfully"),e.$router.go(),t.next=12;break;case 11:e.$message.error("One of the post fields is not valid.");case 12:e.saveLoading=!1,t.next=16;break;case 15:e.$message.warning("Slow Down 😥");case 16:case"end":return t.stop()}}),t)})))()},resetChanges:function(){this.descriptionInput=this.post.description,this.$refs.editor.quill.setContents(this.post.content),this.hasPostChanged=!1,this.newPostImageFile=null,this.newPostImageURL=null,this.publishedP=this.post.published},closeEditMode:function(){this.editMode=!1;var e=JSON.stringify(this.$refs.editor.quill.getContents().ops);(this.descriptionInput!=this.post.description||this.originalContent!=e||this.newPostImageFile||this.publishedP!=this.post.published)&&(this.hasPostChanged=!0)},openEditMode:function(){this.hasPostChanged=!1,this.editMode=!0,this.$message.warning({dangerouslyUseHTMLString:!0,message:"A quick reminder, you can not change the post title or slug! <br>\n                  If you want to change them, delete your post and create another one."})},getTime:function(time){return new Date(time).toLocaleDateString("id-ID",this.timeOptions)},likePost:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.authUser){t.next=19;break}if(e.likeLoading){t.next=16;break}if(e.likeLoading=!0,n={ownerId:e.user.uid,slug:e.post.slug,uid:e.authUser.uid},!e.hasAlreadyLiked){t.next=10;break}return t.next=7,e.$store.dispatch("post/dislikePost",n);case 7:e.post.likes.splice(e.post.likes.indexOf(e.authUser.uid),1),t.next=13;break;case 10:return t.next=12,e.$store.dispatch("post/likePost",n);case 12:e.post.likes.push(e.authUser.uid);case 13:e.likeLoading=!1,t.next=17;break;case 16:e.$message.warning("Slow Down 😥");case 17:t.next=20;break;case 19:e.$message.warning("You have to login to like a post.");case 20:case"end":return t.stop()}}),t)})))()},addToBookmarks:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.authUser){t.next=20;break}if(e.bookmarkLoading){t.next=17;break}if(e.bookmarkLoading=!0,n={uid:e.post.uid,slug:e.post.slug,createdAt:Date.now()},o={bookmarkData:n,uid:e.authUser.uid},!e.hasAlreadyBookmarked){t.next=11;break}return t.next=8,e.$store.dispatch("post/removeBookmark",{bookmarkData:e.hasAlreadyBookmarked,uid:e.authUser.uid});case 8:e.$message.success("Post deleted from your bookmarks."),t.next=14;break;case 11:return t.next=13,e.$store.dispatch("post/addBookmark",o);case 13:e.$message.success("Post successfully added to your bookmarks.");case 14:e.bookmarkLoading=!1,t.next=18;break;case 17:e.$message.warning("Slow Down 😥");case 18:t.next=21;break;case 20:e.$message.warning("You have to login to bookmark a post.");case 21:case"end":return t.stop()}}),t)})))()},handlePostImageSuccess:function(e){var img=new Image;img.src=URL.createObjectURL(e.file);var t=this;img.onload=function(){this.width>1280||this.height>720?t.$message.error("Post image resolution cannot exceed 1280 x 720"):(t.newPostImageURL=this.src,t.newPostImageFile=e.file)}},beforePostImageUpload:function(e){var t="image/jpeg"===e.type||"image/png"===e.type,n=e.size/1024/1024<2;return t?n||this.$message.error("Post image size cannot exceed 2 MB !"):this.$message.error("Post image must be JPG or PNG format!"),t&&n},removePostImage:function(){this.newPostImageURL=null,this.newPostImageFile=null}},watch:{},computed:{authUser:function(){return this.$store.getters["user/getUser"]},hasAlreadyBookmarked:function(){var e=this,t=!1;return this.authUser&&(t=this.authUser.bookmarks.filter((function(b){return b.uid==e.post.uid&&b.slug==e.post.slug}))[0]),t},hasAlreadyLiked:function(){var e=!1;return this.authUser&&(e=this.post.likes.includes(this.authUser.uid)),e},ownPost:function(){return null!=this.authUser&&this.authUser.uid==this.post.uid}},mounted:function(){var e=this;this.publishedP=this.post.published,this.editorLoading=!0,setTimeout((function(){e.$refs.editor.quill.setContents(e.post.content),e.originalContent=JSON.stringify(e.$refs.editor.quill.getContents().ops),e.editorLoading=!1}),1e3)},asyncData:function(e){return Object(r.a)(regeneratorRuntime.mark((function t(){var n,o,r,c,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.store.dispatch("user/fetchUserId",e.route.params.username);case 2:if(n=t.sent,o=e.store.getters["user/getUser"],!n.exists){t.next=25;break}return t.next=7,e.store.dispatch("user/fetchUser",n.data().uid);case 7:return r=t.sent.data(),t.next=10,e.store.dispatch("post/fetchPost",{uid:r.uid,slug:e.route.params.postSlug});case 10:if(!(c=t.sent).exists){t.next=22;break}if(!(c.data().published||o&&o.uid==c.data().uid)){t.next=19;break}return t.next=15,e.store.dispatch("comment/fetchCommentCount",{postOwnerId:r.uid,slug:c.data().slug});case 15:return l=t.sent,t.abrupt("return",{user:r,post:d(d({},c.data()),{},{commentCount:l}),descriptionInput:c.data().description});case 19:e.redirect("/");case 20:t.next=23;break;case 22:e.redirect("/");case 23:t.next=26;break;case 25:e.redirect("/");case 26:case"end":return t.stop()}}),t)})))()}},h=m,f=(n(517),n(29)),component=Object(f.a)(h,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"p-2 postView flex"},[o("div",{staticClass:"max-w-md mx-auto overflow-hidden md:max-w-2xl"},[o("div",{staticClass:"flex-shrink md:flex-shrink-1"},[o("div",{staticClass:"p-1 postView flex"},[e.ownPost?o("div",{staticClass:"flex flex-col space-x-0 space-y-2"},[e.editMode?o("div",{staticClass:"flex flex-col space-x-0 space-y-2"},[o("el-button",{staticClass:"w-full",attrs:{type:"primary"},on:{click:function(t){return e.closeEditMode()}}},[e._v("\n          Live Preview")]),e._v(" "),o("el-button",{staticClass:"w-full",attrs:{type:"info",plain:!e.publishedP},on:{click:function(t){return e.togglePublishedStatus()}}},[e._v("\n          "+e._s(e.publishedP?"Published":"Unpublished"))])],1):o("div",{staticClass:"flex flex-col space-x-0 space-y-2"},[o("el-button",{staticClass:"bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded",on:{click:function(t){return e.openEditMode()}}},[e._v("\n          Update Post")]),e._v(" "),o("el-button",{staticClass:"bg-red hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow",attrs:{type:"danger"},on:{click:function(t){return e.openDeleteModal()}}},[e._v("\n          Delete Post")])],1)]):e._e()]),e._v(" "),o("div",{staticClass:"p-1 postView flex"},[e.ownPost&&e.hasPostChanged?o("div",{staticClass:"space-x-0 space-y-2"},[o("el-button",{staticClass:"bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded",on:{click:function(t){return e.resetChanges()}}},[e._v("\n        Reset Changes")]),e._v(" "),o("el-button",{staticClass:"bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50",on:{click:function(t){return e.saveChanges()}}},[e._v("\n        Save Changes")])],1):e._e()]),e._v(" "),o("div",{staticClass:"p-5"},[o("h3",{staticClass:"overflow-hidden overflow-ellipsis font-semibold capitalize",staticStyle:{"letter-spacing":"-1px"}},[e._v(e._s(e.post.title))]),e._v(" "),o("div",[o("div",{staticClass:"my-2 text-sm text-gray-600 flex justify-between"},[e.post.createdAt!=e.post.updatedAt?o("div",{staticClass:"flex items-center",attrs:{title:"Last Update"}},[o("span",{staticClass:"text-lg isax-calendar-edit mr-1"}),o("span",[e._v(e._s(e.getTime(e.post.updatedAt)))])]):e._e()])]),e._v(" "),e.editMode?o("el-input",{staticClass:"descriptionInput",attrs:{type:"textarea",autosize:{minRows:1,maxRows:6},maxlength:e.descriptionLimit,"show-word-limit":""},model:{value:e.descriptionInput,callback:function(t){e.descriptionInput=t},expression:"descriptionInput"}}):o("p",{staticClass:"my-4 overflow-hidden overflow-ellipsis",staticStyle:{"line-height":"1.5rem","font-size":"16px"}},[e._v(e._s(e.descriptionInput))]),e._v(" "),e.editMode?o("div",{staticClass:"relative"},[o("el-upload",{staticClass:"post-image-uploader",attrs:{action:"","show-file-list":!1,"http-request":e.handlePostImageSuccess,"before-upload":e.beforePostImageUpload}},[o("div",{staticClass:"w-full h-80 rounded-lg shadow-lg overflow-hidden"},[o("div",{staticClass:"postImageAnimation w-full h-full bg-cover",style:"background-image: url("+(e.newPostImageURL||e.post.postImageURL)+")"})]),e._v(" "),e.newPostImageURL?e._e():o("div",{staticClass:" post-image-uploader-icon"},[o("span",{staticClass:"isax-add"})])]),e._v(" "),e.newPostImageFile?o("div",{staticClass:"rounded-tr-lg rounded-bl-lg overflow-hidden removeImageBtn absolute py-4 px-8 top-0 right-0 absolute text-white space-x-2 cursor-pointer select-none flex items-center w-max",on:{click:e.removePostImage}},[e._m(0)]):e._e()],1):o("div",{staticClass:"w-full h-60 rounded-lg shadow-lg overflow-hidden"},[o("div",{directives:[{name:"loading",rawName:"v-loading",value:e.editorLoading,expression:"editorLoading"}],staticClass:"postImageAnimation w-full h-full bg-cover",style:"background-image: url("+(e.newPostImageURL||e.post.postImageURL)+")"})]),e._v(" "),o("div",{staticClass:"flex justify-between py-3"},[o("ul",{staticClass:"flex items-center text-sm pr-2 space-x-2"},e._l(e.post.tags,(function(t){return o("li",{key:t.slug},[o("NuxtLink",{staticClass:"tag",attrs:{to:"/tag/"+t.slug}},[e._v(e._s(t.name))])],1)})),0),e._v(" "),o("div",{staticClass:"flex items-center space-x-1"},[o("div",{staticClass:"flex items-center space-x-1",class:{"text-red-700":e.hasAlreadyLiked}},[e.likeLoading?o("Loading"):o("span",[e._v(e._s(e.post.likes.length))]),o("span",{staticClass:"text-xl p-2 rounded-full cursor-pointer transition duration-300 hover:bg-red-50 hover:text-red-700 isax-heart",class:{"bg-red-50":e.hasAlreadyLiked},on:{click:function(t){return e.likePost()}}})],1),e._v(" "),o("a",{staticClass:"flex items-center space-x-1",attrs:{href:"#comments"}},[o("span",[e._v(e._s(e.post.commentCount))]),o("span",{staticClass:"text-xl p-2 rounded-full cursor-pointer transition duration-300 hover:bg-blue-50 hover:text-blue-700 isax-messages-3"})]),e._v(" "),o("span",{staticClass:"flex items-center justify-center text-2xl space-x-1 rounded-full cursor-pointer transition duration-300 hover:bg-yellow-50 hover:text-yellow-700",class:{"text-yellow-700 bg-yellow-50":e.hasAlreadyBookmarked,"isax-archive-add":!e.bookmarkLoading},on:{click:function(t){return e.addToBookmarks()}}},[e.bookmarkLoading?o("Loading"):e._e()],1)])]),e._v(" "),o("div",{staticClass:"flex w-max py-3 items-center space-x-2"},[o("img",{staticClass:"rounded-full w-14 h-14 shadow-lg",attrs:{src:e.user.photoURL||n(195)}}),e._v(" "),o("div",{staticClass:"flex flex-col"},[o("NuxtLink",{staticClass:"font-semibold transition duration-300 transform hover:translate-x-1",attrs:{title:"@"+e.user.username,to:"/"+e.user.username}},[e._v("\n           "+e._s(e.user.displayName)+"\n          ")]),e._v(" "),o("span",{staticClass:"text-sm"},[e._v(e._s(e.user.profession))])],1)]),e._v(" "),o("client-only",[o("div",{directives:[{name:"loading",rawName:"v-loading",value:e.editorLoading,expression:"editorLoading"}],staticClass:"mt-2"},[o("quill-editor",{ref:"editor",class:{contentInput:e.editMode},attrs:{contentType:"html",disabled:!e.editMode}})],1)]),e._v(" "),o("hr",{staticClass:"my-8"}),e._v(" "),o("h3",{staticClass:"font-semibold mb-4",attrs:{id:"comments"}},[e._v("Comments")]),e._v(" "),o("div",{staticClass:"flex-1 space-y-2 mb-4"},[o("el-input",{attrs:{type:"textarea",placeholder:"Send your feedback please..",autosize:{minRows:4},autocomplete:"off",maxlength:e.commentLimit,"show-word-limit":""},model:{value:e.commentContent,callback:function(t){e.commentContent=t},expression:"commentContent"}}),e._v(" "),o("div",{staticClass:"flex"},[o("span",{staticClass:"flex-1"}),e._v(" "),o("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.addComment()}}},[e._v("Add Comment")])],1)],1),e._v(" "),e.post.commentCount>0?o("Comments",{key:e.forceUpdate,attrs:{parent:e.post.slug,postOwnerId:e.post.uid,post:e.post}}):o("el-empty",{attrs:{description:"No comment found, be the first!","image-size":100}})],1)])])])}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"z-10 relative"},[n("span",{staticClass:"isax-trash text-lg"}),e._v(" "),n("span",[e._v("Remove Post Image")])])}],!1,null,null,null);t.default=component.exports;installComponents(component,{Loading:n(276).default,Comments:n(500).default})}}]);