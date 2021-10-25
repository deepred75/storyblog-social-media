(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{495:function(e,t,r){var content=r(503);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(31).default)("4653fe6a",content,!0,{sourceMap:!1})},502:function(e,t,r){"use strict";r(495)},503:function(e,t,r){var o=r(30)((function(i){return i[1]}));o.push([e.i,"/*purgecss start ignore*/\nh3[data-v-3f8ea797]{\n  margin-bottom:0.5rem;\n  font-weight:600\n}\n\n/*purgecss end ignore*/",""]),o.locals={},e.exports=o},523:function(e,t,r){"use strict";r.r(t);var o=r(1),n=(r(17),r(39),r(40),r(493),r(280),r(28),{head:function(){return{title:"Account Settings"}},data:function(){return{user:null,deleteAccountDialog:!1,ppFile:null,ppURL:null,unchangedPP:null,loadingUpdate:!1,limitSmall:25,limitBio:150}},methods:{changeUsername:function(){0!=this.user.usernameChangeLimit&&(this.$store.commit("user/setBackupUsername",this.user.username),this.$store.commit("user/updateUsername",null))},deleteConfirmed:function(){this.deleteAccountDialog=!1,alert("Sorry this feature is not available yet. Please check back in the future 😅")},exportData:function(){alert("Sorry this feature is not available yet. Please check back in the future 😅")},updatePublicProfile:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.loadingUpdate){t.next=17;break}if(e.loadingUpdate=!0,!e.user.displayName){t.next=13;break}if(!(e.user.displayName.length<=e.limitSmall&&e.user.bio.length<=e.limitBio&&e.user.profession.length<=e.limitSmall&&e.user.location.length<=e.limitSmall)){t.next=10;break}return t.next=6,e.$store.dispatch("user/updateUser",{updatedUser:JSON.parse(JSON.stringify(e.user)),ppFile:e.ppFile,unchangedPP:e.unchangedPP});case 6:e.$message.success("Profile updated successfully."),e.$router.go(),t.next=11;break;case 10:e.$message.error("You can't break the rules.");case 11:t.next=14;break;case 13:e.$message.error("You should type something in display name field.");case 14:e.loadingUpdate=!1,t.next=18;break;case 17:e.$message.warning("Slow Down 😥");case 18:case"end":return t.stop()}}),t)})))()},handleAvatarSuccess:function(e){var img=new Image;img.src=URL.createObjectURL(e.file);var t=this;img.onload=function(){460!=this.width&&460!=this.height?t.$message.error("Avatar picture resolution must be 460x460"):(t.ppURL=this.src,t.ppFile=e.file)}},beforeAvatarUpload:function(e){var t="image/jpeg"===e.type||"image/png"===e.type,r=e.size/1024/1024<2;return t?r||this.$message.error("Avatar picture size can not exceed 2MB!"):this.$message.error("Avatar picture must be JPG or PNG format!"),t&&r},removePP:function(){this.user.photoURL=null,this.ppURL=null,this.ppFile=null},restorePP:function(){this.user.photoURL=this.unchangedPP,this.ppURL=null,this.ppFile=null}},computed:{},mounted:function(){this.user=JSON.parse(JSON.stringify(this.$store.getters["user/getUser"])),this.unchangedPP=this.user&&this.user.photoURL}}),l=(r(502),r(29)),component=Object(l.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.user?r("div",{staticClass:"px-5 py-5"},[r("h3",{staticClass:"text-4xl font-semibold mb-8"},[e._v("Settings")]),e._v(" "),r("div",{staticClass:"max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl"},[r("div",{staticClass:"md:flex"},[r("div",{staticClass:"p-8"},[r("div",{staticClass:"uppercase tracking-wide text-sm text-indigo-500 font-semibold"},[e._v("Public Profile")]),e._v(" "),r("el-form",{staticClass:"mt-4",attrs:{model:e.user,"label-position":"top"}},[r("el-form-item",{attrs:{label:"Profile Picture"}},[r("div",{staticClass:"flex items-center"},[r("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"Click to upload a new profile picture",placement:"right"}},[r("el-upload",{staticClass:"avatar-uploader ",attrs:{action:"","show-file-list":!1,"http-request":e.handleAvatarSuccess,"before-upload":e.beforeAvatarUpload}},[e.user.photoURL||e.ppURL?r("img",{staticClass:"avatar",attrs:{src:e.ppURL||e.user.photoURL}}):r("i",{staticClass:"isax-add avatar-uploader-icon"})])],1),e._v(" "),e.user.photoURL||e.ppURL?r("div",{staticClass:"select-none ml-6 flex justify-center items-center rounded-md text-red-600 cursor-pointer",on:{click:function(t){return e.removePP()}}},[r("i",{staticClass:"mr-2 text-xl isax-trash"}),e._v("Remove Image")]):e.unchangedPP?r("div",{staticClass:"select-none ml-6 flex items-center justify-center rounded-md text-reblued-600 cursor-pointer",on:{click:function(t){return e.restorePP()}}},[r("i",{staticClass:"mr-2 text-xl isax-undo"}),e._v("Restore Current")]):e._e()],1)]),e._v(" "),r("el-form-item",{attrs:{label:"Display Name",prop:"displayName",rules:[{required:!0,message:"Display name is required",trigger:"blur"},{max:25,message:"You should follow the rules",trigger:"blur"}]}},[r("el-input",{attrs:{autocomplete:"off",maxlength:25,"show-word-limit":""},model:{value:e.user.displayName,callback:function(t){e.$set(e.user,"displayName",t)},expression:"user.displayName"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"Location"}},[r("el-input",{attrs:{autocomplete:"off",maxlength:25,"show-word-limit":""},model:{value:e.user.location,callback:function(t){e.$set(e.user,"location",t)},expression:"user.location"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"Profession"}},[r("el-input",{attrs:{autocomplete:"off",maxlength:25,"show-word-limit":""},model:{value:e.user.profession,callback:function(t){e.$set(e.user,"profession",t)},expression:"user.profession"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"Bio"}},[r("el-input",{attrs:{type:"textarea",autocomplete:"off",maxlength:150,"show-word-limit":""},model:{value:e.user.bio,callback:function(t){e.$set(e.user,"bio",t)},expression:"user.bio"}})],1)],1),e._v(" "),r("div",{staticClass:"flex items-center mt-4"},[r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.updatePublicProfile()}}},[e._v("Save Changes")]),e._v(" "),e.loadingUpdate?r("Loading",{staticClass:"ml-4 text-sm text-gray-800"}):e._e()],1)],1)])]),e._v(" "),r("p",{staticClass:"mt-4 mb-4"}),r("div",{staticClass:"max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl"},[r("div",{staticClass:"md:flex"},[r("div",{staticClass:"p-8"},[r("div",{staticClass:"uppercase tracking-wide text-sm text-indigo-500 font-semibold"},[e._v("Account")]),e._v(" "),r("div",{staticClass:"space-y-16"},[r("section",[r("h4",[e._v("Change Username ("+e._s(e.user.usernameChangeLimit)+" Left)")]),e._v(" "),r("hr",{staticClass:"mt-4 mb-8"}),e._v(" "),r("p",{staticClass:"text-sm mb-4"},[e._v("After changing username, your previous one becomes available for anyone else to claim.\n            Most references to your posts under the previous username automatically change to the new one. However, some\n            links to your profile won't automatically redirect.")]),e._v(" "),r("el-button",{attrs:{disabled:0==e.user.usernameChangeLimit,type:"primary"},on:{click:function(t){return e.changeUsername()}}},[e._v("Change Username")])],1),e._v(" "),r("section",[r("h4",[e._v("Export Account Data")]),e._v(" "),r("hr",{staticClass:"mt-4 mb-8"}),e._v(" "),r("p",{staticClass:"text-sm mb-4"},[e._v("Export all of your posts and profile metadata for "),r("NuxtLink",{staticClass:"font-semibold",attrs:{to:e.user.username}},[e._v("@"+e._s(e.user.username))]),e._v(".\n            Exports will be available for 7 days.")],1),e._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.exportData()}}},[e._v("Export Data")])],1)])])])]),e._v(" "),r("p",{staticClass:"mt-4 mb-4"}),r("div",{staticClass:"max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl"},[r("div",{staticClass:"md:flex"},[r("div",{staticClass:"p-8"},[r("div",{staticClass:"uppercase tracking-wide text-sm text-indigo-500 font-semibold"},[e._v("Erase Account")]),e._v(" "),r("h4",{staticClass:"text-red-600"},[e._v("Permanently")]),e._v(" "),r("hr",{staticClass:"mt-4 mb-8"}),e._v(" "),r("p",{staticClass:"text-sm mb-4"},[e._v("Once you delete your account, it can't be undone. Please be certain what you do.")]),e._v(" "),r("el-button",{attrs:{type:"danger",plain:""},on:{click:function(t){e.deleteAccountDialog=!0}}},[e._v("Delete Account")]),e._v(" "),r("el-dialog",{attrs:{title:"Warning",visible:e.deleteAccountDialog,width:"70%",center:""},on:{"update:visible":function(t){e.deleteAccountDialog=t}}},[r("span",[e._v("Your account will be delete permanently, are you sure? It can't be undone")]),e._v(" "),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.deleteAccountDialog=!1}}},[e._v("Cancel")]),e._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.deleteConfirmed()}}},[e._v("I am sure!")])],1)])],1)])])]):e._e()}),[],!1,null,"3f8ea797",null);t.default=component.exports;installComponents(component,{Loading:r(276).default})}}]);