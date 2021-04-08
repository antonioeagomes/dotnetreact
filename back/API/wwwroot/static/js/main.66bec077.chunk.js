(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{307:function(e,t,n){},523:function(e,t,n){"use strict";n.r(t),n.d(t,"history",(function(){return $e}));var i=n(0),c=n(45),r=n.n(c),a=(n(307),n(540)),s=n(19),o=n(24),l=n(545),d=n(556),u=n(291),j=n(139),b=n(54),h=n(28),O=n(23),v=n.n(O),p=n(44),x=n(16),m=n(22),f=n(18),g=function e(t){Object(x.a)(this,e),Object.assign(this,t)},y=function e(t){Object(x.a)(this,e),this.id=void 0,this.title="",this.date=null,this.description="",this.category="",this.city="",this.venue="",t&&(this.id=t.id,this.title=t.title,this.date=t.date,this.description=t.description,this.category=t.category,this.city=t.city,this.venue=t.venue)},w=n(72),A=n.n(w),S=n(92),C=function e(t,n){Object(x.a)(this,e),this.data=void 0,this.pagination=void 0,this.data=t,this.pagination=n},k=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;Object(x.a)(this,e),this.pageNumber=void 0,this.pageSize=void 0,this.pageNumber=t,this.pageSize=n};A.a.defaults.baseURL="/api",A.a.interceptors.request.use((function(e){var t=H.commonStore.token;return t&&(e.headers.Authorization="Bearer ".concat(t)),e})),A.a.interceptors.response.use(function(){var e=Object(p.a)(v.a.mark((function e(t){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.next=3;break;case 3:if(!(n=t.headers.pagination)){e.next=7;break}return t.data=new C(t.data,JSON.parse(n)),e.abrupt("return",t);case 7:return e.abrupt("return",t);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),(function(e){var t=e.response,n=t.data,i=t.status,c=t.config;switch(i){case 400:if("string"===typeof n&&S.b.error(n),"get"===c.method&&n.errors.hasOwnProperty("id")&&$e.push("/not-found"),n.errors){var r=[];for(var a in n.errors)n.errors[a]&&r.push(n.errors[a]);throw r.flat()}S.b.error("Bad Request: "+n);break;case 401:S.b.error("Unauthorized");break;case 404:S.b.error("Not Found"),$e.push("/not-found");break;case 500:S.b.error("Server Error"),H.commonStore.setServerError(n),$e.push("/server-error")}return Promise.reject(e)}));var I=function(e){return e.data},L=function(e){return A.a.get(e).then(I)},M=function(e,t){return A.a.post(e,t).then(I)},F=function(e,t){return A.a.put(e,t).then(I)},P=function(e){return A.a.delete(e).then(I)},E={Activities:{list:function(e){return A.a.get("/activities",{params:e}).then(I)},details:function(e){return L("/activities/".concat(e))},create:function(e){return M("/activities",e)},update:function(e){return F("/activities/".concat(e.id),e)},delete:function(e){return P("/activities/".concat(e))},attend:function(e){return M("/activities/".concat(e,"/attend"),{})}},Account:{current:function(){return L("/account")},login:function(e){return M("/account/login",e)},register:function(e){return M("/account/register",e)}},Profiles:{updateFollowing:function(e){return M("/follow/".concat(e),{})}}},D=function e(t){Object(x.a)(this,e),this.username=t.username,this.displayName=t.displayName,this.image=t.image},z=function(){function e(){var t=this;Object(x.a)(this,e),this.activityRegistry=new Map,this.selectedActivity=void 0,this.editMode=!1,this.loading=!1,this.loadingInitial=!1,this.pagination=null,this.pagingParams=new k,this.predicate=(new Map).set("all",!0),this.setPagingParams=function(e){t.pagingParams=e},this.loadActivities=Object(p.a)(v.a.mark((function e(){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.setLoadingInitial(!0),e.prev=1,e.next=4,E.Activities.list(t.axiosParams);case 4:(n=e.sent).data.forEach((function(e){t.setActivity(e)})),t.setPagination(n.pagination),t.setLoadingInitial(!1),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0),t.setLoadingInitial(!1);case 14:case"end":return e.stop()}}),e,null,[[1,10]])}))),this.setPagination=function(e){t.pagination=e},this.setPredicate=function(e,n){var i=function(){t.predicate.forEach((function(e,n){"startDate"!==n&&t.predicate.delete(n)}))};switch(e){case"all":i(),t.predicate.set("all",!0);break;case"isGoing":i(),t.predicate.set("isGoing",!0);break;case"isHost":i(),t.predicate.set("isHost",!0);break;case"startDate":t.predicate.delete("startDate"),t.predicate.set("startDate",n)}},this.loadActivity=function(){var e=Object(p.a)(v.a.mark((function e(n){var i;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(i=t.getActivity(n))){e.next=6;break}return t.setSelectedActivity(i),e.abrupt("return",i);case 6:return t.setLoadingInitial(!0),e.prev=7,e.next=10,E.Activities.details(n);case 10:return i=e.sent,t.setActivity(i),t.setSelectedActivity(i),t.setLoadingInitial(!1),e.abrupt("return",i);case 17:e.prev=17,e.t0=e.catch(7),console.log(e.t0),t.setLoadingInitial(!1);case 21:case"end":return e.stop()}}),e,null,[[7,17]])})));return function(t){return e.apply(this,arguments)}}(),this.getActivity=function(e){return t.activityRegistry.get(e)},this.setActivity=function(e){var n=H.userStore.user;n&&(e.isGoing=e.attendees.some((function(e){return e.username===n.username})),e.isHost=e.hostUsername===n.username,e.host=e.attendees.find((function(t){return t.username===e.hostUsername}))),e.date=new Date(e.date),t.activityRegistry.set(e.id,e)},this.setLoadingInitial=function(e){t.loadingInitial=e},this.setLoading=function(e){t.loading=e},this.setEditMode=function(e){t.editMode=e},this.createActivity=function(){var e=Object(p.a)(v.a.mark((function e(n){var i,c,r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=H.userStore.user,c=new D(i),e.prev=2,e.next=5,E.Activities.create(n);case 5:(r=new g(n)).hostUsername=i.username,r.attendees=[c],t.setActivity(r),Object(f.h)((function(){t.selectedActivity=r})),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(t){return e.apply(this,arguments)}}(),this.updateActivity=function(){var e=Object(p.a)(v.a.mark((function e(n){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.Activities.update(n);case 3:Object(f.h)((function(){if(n.id){var e=Object(h.a)(Object(h.a)({},t.getActivity(n.id)),n);t.activityRegistry.set(n.id,e),t.selectedActivity=e}})),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),this.deleteActivity=function(){var e=Object(p.a)(v.a.mark((function e(n){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.setLoading(!0),e.prev=1,e.next=4,E.Activities.delete(n);case 4:Object(f.h)((function(){t.activityRegistry.delete(n),t.selectedActivity=void 0})),t.setEditMode(!1),t.setLoading(!1),e.next=14;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0),t.setEditMode(!1),t.setLoading(!1);case 14:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),this.updateAttendance=Object(p.a)(v.a.mark((function e(){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=H.userStore.user,t.loading=!0,e.prev=2,e.next=5,E.Activities.attend(t.selectedActivity.id);case 5:Object(f.h)((function(){var e;if(null===(e=t.selectedActivity)||void 0===e?void 0:e.isGoing){var i;t.selectedActivity.attendees=null===(i=t.selectedActivity.attendees)||void 0===i?void 0:i.filter((function(e){return e.username!==(null===n||void 0===n?void 0:n.username)})),t.selectedActivity.isGoing=!1}else{var c,r,a=new D(n);null===(c=t.selectedActivity)||void 0===c||null===(r=c.attendees)||void 0===r||r.push(a),t.selectedActivity.isGoing=!0}t.activityRegistry.set(t.selectedActivity.id,t.selectedActivity)})),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(2);case 10:return e.prev=10,Object(f.h)((function(){return t.loading=!1})),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[2,8,10,13]])}))),this.cancelActivityToggle=Object(p.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.prev=1,e.next=4,E.Activities.attend(t.selectedActivity.id);case 4:Object(f.h)((function(){var e;t.selectedActivity.isCancelled=!(null===(e=t.selectedActivity)||void 0===e?void 0:e.isCancelled),t.activityRegistry.set(t.selectedActivity.id,t.selectedActivity)})),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.log(e.t0);case 10:return e.prev=10,Object(f.h)((function(){return t.loading=!1})),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[1,7,10,13]])}))),this.clearSelectedActivity=function(){t.selectedActivity=void 0},this.updateAttendeeFollowing=function(e){t.activityRegistry.forEach((function(t){var n;null===(n=t.attendees)||void 0===n||n.forEach((function(t){t.username===e&&(t.following?t.followersCount--:t.followersCount++,t.following=!t.following)}))}))},Object(f.d)(this),Object(f.g)((function(){return t.predicate.keys()}),(function(){t.pagingParams=new k,t.activityRegistry.clear(),t.loadActivities()}))}return Object(m.a)(e,[{key:"axiosParams",get:function(){var e=new URLSearchParams;return e.append("pageNumber",this.pagingParams.pageNumber.toString()),e.append("pageSize",this.pagingParams.pageSize.toString()),this.predicate.forEach((function(t,n){"startDate"===n?e.append(n,t.toISOString()):e.append(n,t)})),e}},{key:"activitiesByDate",get:function(){return this.groupActivitiesByDate(Array.from(this.activityRegistry.values()))}},{key:"groupActivitiesByDate",value:function(e){var t=e.sort((function(e,t){return e.date.getTime()-t.date.getTime()}));return Object.entries(t.reduce((function(e,t){var n=t.date.toISOString().split("T")[0];return e[n]=e[n]?[].concat(Object(b.a)(e[n]),[t]):[t],e}),{}))}},{key:"setSelectedActivity",value:function(e){this.selectedActivity=e}}]),e}(),T=n(213),R=function(){function e(){var t=this;Object(x.a)(this,e),this.user=null,this.login=function(){var e=Object(p.a)(v.a.mark((function e(n){var i;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.Account.login(n);case 3:i=e.sent,H.commonStore.setToken(i.token),Object(f.h)((function(){return t.user=i})),$e.push("/activities"),H.modalStore.closeModal(),e.next=13;break;case 10:throw e.prev=10,e.t0=e.catch(0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),this.logout=function(){H.commonStore.setToken(null),localStorage.removeItem("jwt"),t.user=null,$e.push("/")},this.getUser=Object(p.a)(v.a.mark((function e(){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.Account.current();case 3:n=e.sent,Object(f.h)((function(){return t.user=n})),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),this.register=function(){var e=Object(p.a)(v.a.mark((function e(n){var i;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.Account.register(n);case 3:i=e.sent,H.commonStore.setToken(i.token),Object(f.h)((function(){return t.user=i})),$e.push("/activities"),H.modalStore.closeModal(),e.next=14;break;case 10:throw e.prev=10,e.t0=e.catch(0),H.modalStore.closeModal(),e.t0;case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),Object(f.d)(this)}return Object(m.a)(e,[{key:"isLoggedIn",get:function(){return!!this.user}}]),e}(),H={activityStore:new z,commonStore:new function e(){var t=this;Object(x.a)(this,e),this.error=null,this.token=localStorage.getItem("jwt"),this.appLoaded=!1,this.setServerError=function(e){t.error=e},this.setToken=function(e){t.token=e},this.setAppLoaded=function(){t.appLoaded=!0},Object(f.d)(this),Object(f.g)((function(){return t.token}),(function(e){e?localStorage.setItem("jwt",e):localStorage.removeItem("jwt")}))},userStore:new R,modalStore:new function e(){var t=this;Object(x.a)(this,e),this.modal={open:!1,body:null},this.openModal=function(e){t.modal.open=!0,t.modal.body=e},this.closeModal=function(){t.modal.open=!1,t.modal.body=null},Object(f.d)(this)},commentStore:new function e(){var t=this;Object(x.a)(this,e),this.comments=[],this.hubConnection=null,this.createHubConnection=function(e){H.activityStore.selectedActivity&&(t.hubConnection=(new T.a).withUrl("/chat?activityId="+e,{accessTokenFactory:function(){var e;return null===(e=H.userStore.user)||void 0===e?void 0:e.token}}).withAutomaticReconnect().configureLogging(T.b.Information).build(),t.hubConnection.start().catch((function(e){return console.log("Error to establishing the connection",e)})),t.hubConnection.on("LoadComments",(function(e){Object(f.h)((function(){e.forEach((function(e){e.createdAt=new Date(e.createdAt+"Z")})),t.comments=e}))})),t.hubConnection.on("ReceiveComment",(function(e){Object(f.h)((function(){e.createdAt=new Date(e.createdAt),t.comments.unshift(e)}))})))},this.stopHubConnection=function(){var e;null===(e=t.hubConnection)||void 0===e||e.stop().catch((function(e){return console.log("Error to stopping the connection",e)}))},this.clearComments=function(){t.comments=[],t.stopHubConnection()},this.addComment=function(){var e=Object(p.a)(v.a.mark((function e(n){var i,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.activityId=null===(i=H.activityStore.selectedActivity)||void 0===i?void 0:i.id,e.prev=1,e.next=4,null===(c=t.hubConnection)||void 0===c?void 0:c.invoke("SendComment",n);case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t){return e.apply(this,arguments)}}(),Object(f.d)(this)}},N=Object(i.createContext)(H);function G(){return Object(i.useContext)(N)}var q=n(1),B=Object(s.a)((function(){var e=G().userStore,t=e.user,n=e.logout;return Object(q.jsx)(l.a,{inverted:!0,fixed:"top",children:Object(q.jsxs)(a.a,{children:[Object(q.jsxs)(l.a.Item,{as:o.b,to:"/",exact:!0,header:!0,children:[Object(q.jsx)("img",{src:"/assets/logo.png",alt:"logo",style:{marginRight:"1rem"}}),"Activities"]}),Object(q.jsx)(l.a.Item,{as:o.b,to:"/activities",name:"Activities"}),Object(q.jsx)(l.a.Item,{children:Object(q.jsx)(d.a,{as:o.b,to:"/createActivity",positive:!0,content:"Criar Atividade"})}),Object(q.jsxs)(l.a.Item,{position:"right",children:[Object(q.jsx)(u.a,{src:(null===t||void 0===t?void 0:t.image)||"/assets/user.png",avatar:!0,spaced:"right"}),Object(q.jsx)(j.a,{pointing:"top left",text:null===t||void 0===t?void 0:t.displayName,children:Object(q.jsxs)(j.a.Menu,{children:[Object(q.jsx)(j.a.Item,{as:o.a,to:"/profile/".concat(null===t||void 0===t?void 0:t.username),text:"Profile",icon:"user"}),Object(q.jsx)(j.a.Item,{onClick:n,text:"Logout",icon:"power"})]})})]})]})})})),V=n(33),U=n(561),J=n(541),W=n(560),Y=n(559),Z=n(549),K=n(544),Q=n(176),X=n(90),$=n(550),_=n(543),ee=n(552),te=Object(s.a)((function(e){var t=e.profile;return Object(q.jsxs)(ee.a,{as:o.a,to:"/profiles/".concat(t.username),children:[Object(q.jsx)(u.a,{src:t.image||"/assets/user.png"}),Object(q.jsxs)(ee.a.Content,{children:[Object(q.jsx)(ee.a.Header,{children:t.displayName}),Object(q.jsx)(ee.a.Description,{children:t.bio})]}),Object(q.jsxs)(ee.a.Content,{extra:!0,children:[Object(q.jsx)(X.a,{name:"user"}),t.followersCount," followers"]})]})})),ne=Object(s.a)((function(e){var t=e.attendees,n={borderColor:"orange",borderWidth:2};return Object(q.jsx)($.a,{horizontal:!0,children:t.map((function(e){return Object(q.jsx)(q.Fragment,{children:Object(q.jsx)(_.a,{hoverable:!0,trigger:Object(q.jsx)($.a.Item,{as:o.a,to:"/profiles/".concat(e.username),children:Object(q.jsx)(u.a,{size:"mini",circular:!0,bordered:!0,style:e.following?n:null,src:e.image||"/assets/user.png"})},e.username),children:Object(q.jsx)(_.a.Content,{children:Object(q.jsx)(te,{profile:e})})},e.username)})}))})}));function ie(e){var t,n=e.activity;return Object(q.jsxs)(Y.a.Group,{children:[Object(q.jsxs)(Y.a,{children:[n.isCancelled&&Object(q.jsx)(Q.a,{attached:"top",color:"red",content:"Cancelled",style:{textAlign:"center"}}),Object(q.jsx)(Z.a.Group,{children:Object(q.jsxs)(Z.a,{children:[Object(q.jsx)(Z.a.Image,{style:{marginBottom:3},size:"tiny",circular:!0,src:"/assets/user.png"}),Object(q.jsxs)(Z.a.Content,{children:[Object(q.jsx)(Z.a.Header,{as:o.a,to:"/activities/".concat(n.id),children:n.title}),Object(q.jsxs)(Z.a.Description,{children:[" ","Hosted by: ".concat(null===(t=n.host)||void 0===t?void 0:t.displayName)," "]}),n.isHost&&Object(q.jsx)(Z.a.Description,{children:Object(q.jsx)(Q.a,{basic:!0,color:"orange",children:"You are hosting this activity"})}),n.isGoing&&!n.isHost&&Object(q.jsx)(Z.a.Description,{children:Object(q.jsx)(Q.a,{basic:!0,color:"green",children:"You are going to this activity"})})]})]})})]}),Object(q.jsx)(Y.a,{children:Object(q.jsxs)("span",{children:[Object(q.jsx)(X.a,{name:"clock"})," ",Object(K.a)(n.date,"dd MMM yyyy hh:mm"),Object(q.jsx)(X.a,{name:"map marker alternate"})," ",n.venue]})}),Object(q.jsx)(Y.a,{secondary:!0,children:Object(q.jsx)(ne,{attendees:n.attendees})}),Object(q.jsxs)(Y.a,{clearing:!0,children:[Object(q.jsx)("span",{children:n.description}),Object(q.jsx)(d.a,{as:o.a,to:"/activities/".concat(n.id),color:"teal",floated:"right",content:"View"})]})]})}var ce=Object(s.a)((function(){var e=G().activityStore.activitiesByDate;return Object(q.jsx)(q.Fragment,{children:e.map((function(e){var t=Object(V.a)(e,2),n=t[0],c=t[1];return Object(q.jsxs)(i.Fragment,{children:[Object(q.jsx)(W.a,{sub:!0,color:"teal",children:n}),Object(q.jsx)(Y.a,{children:Object(q.jsx)(Z.a.Group,{divided:!0,children:c.map((function(e){return Object(q.jsx)(ie,{activity:e},e.id)}))})})]},n)}))})})),re=n(289),ae=Object(s.a)((function(){var e=G().activityStore,t=e.predicate,n=e.setPredicate;return Object(q.jsxs)(q.Fragment,{children:[Object(q.jsxs)(l.a,{vertical:!0,size:"large",style:{with:"100%",marginTop:25},children:[Object(q.jsx)(W.a,{icon:"filter",attached:!0,color:"teal",content:"Filters"}),Object(q.jsx)(l.a.Item,{content:"All Activities",active:t.has("all"),onClick:function(){return n("all","true")}}),Object(q.jsx)(l.a.Item,{content:"I am going",active:t.has("isGoing"),onClick:function(){return n("isGoing","true")}}),Object(q.jsx)(l.a.Item,{content:"I am hosting",active:t.has("isHost"),onClick:function(){return n("isHost","true")}})]}),Object(q.jsx)(W.a,{}),Object(q.jsx)(re.a,{onChange:function(e){return n("startDate",e)},value:t.get("startDate")||new Date})]})})),se=n(281),oe=n.n(se),le=n(553);function de(){return Object(q.jsx)(i.Fragment,{children:Object(q.jsx)(le.a,{fluid:!0,style:{marginTop:25},children:Object(q.jsxs)(Y.a.Group,{children:[Object(q.jsx)(Y.a,{style:{minHeight:110},children:Object(q.jsxs)(le.a,{children:[Object(q.jsxs)(le.a.Header,{image:!0,children:[Object(q.jsx)(le.a.Line,{}),Object(q.jsx)(le.a.Line,{})]}),Object(q.jsx)(le.a.Paragraph,{children:Object(q.jsx)(le.a.Line,{})})]})}),Object(q.jsx)(Y.a,{children:Object(q.jsxs)(le.a,{children:[Object(q.jsx)(le.a.Line,{}),Object(q.jsx)(le.a.Line,{})]})}),Object(q.jsx)(Y.a,{secondary:!0,style:{minHeight:70}}),Object(q.jsx)(Y.a,{clearing:!0,children:Object(q.jsx)(d.a,{disabled:!0,color:"blue",floated:"right",content:"View"})})]})})})}var ue=Object(s.a)((function(){var e=G().activityStore,t=e.loadingInitial,n=e.activityRegistry,c=e.loadActivities,r=e.setPagingParams,a=e.pagination,s=Object(i.useState)(!1),o=Object(V.a)(s,2),l=o[0],d=o[1];return Object(i.useEffect)((function(){n.size<=0&&c()}),[n.size,c]),Object(q.jsxs)(U.a,{children:[Object(q.jsx)(U.a.Column,{width:"10",children:t&&!l?Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)(de,{}),Object(q.jsx)(de,{})]}):Object(q.jsx)(oe.a,{pageStart:0,loadMore:function(){d(!0),r(new k(a.currentPage+1)),c().then((function(){return d(!1)}))},hasMore:!l&&!!a&&a.currentPage<a.totalPages,initialLoad:!1,children:Object(q.jsx)(ce,{})})}),Object(q.jsx)(U.a.Column,{width:"6",children:Object(q.jsx)(ae,{})}),Object(q.jsx)(U.a.Column,{width:10,children:Object(q.jsx)(J.a,{active:l})})]})})),je=n(27),be=n(546);function he(e){var t=Object(je.e)(e.name),n=Object(V.a)(t,2),i=n[0],c=n[1];return Object(q.jsxs)(be.a.Field,{error:c.touched&&!!c.error,children:[Object(q.jsx)("label",{children:e.label}),Object(q.jsx)("input",Object(h.a)(Object(h.a)({},i),e)),c.touched&&c.error?Object(q.jsx)(Q.a,{basic:!0,color:"red",children:c.error}):null]})}var Oe=Object(s.a)((function(){var e=G().userStore;return Object(q.jsx)(je.d,{initialValues:{email:"",password:"",error:null},onSubmit:function(t,n){var i=n.setErrors;return e.login(t).catch((function(e){return i({error:"Invalid email or password!"})}))},children:function(e){var t=e.handleSubmit,n=e.isSubmitting,i=e.errors;return Object(q.jsxs)(je.c,{className:"ui form",onSubmit:t,autoComplete:"off",children:[Object(q.jsx)(W.a,{as:"h2",content:"Login to activities",color:"teal",textAlign:"center"}),Object(q.jsx)(he,{name:"email",placeholder:"Email"}),Object(q.jsx)(he,{name:"password",type:"password",placeholder:"Password"}),Object(q.jsx)(je.a,{name:"error",render:function(){return Object(q.jsx)(Q.a,{basic:!0,color:"red",style:{marginBottom:10},content:i.error})}}),Object(q.jsx)(d.a,{loading:n,positive:!0,content:"Login",type:"submit",fluid:!0})]})}})})),ve=n(42),pe=n(554);function xe(e){var t=e.errors;return Object(q.jsx)(pe.a,{error:!0,children:t&&Object(q.jsx)(pe.a.List,{children:t.map((function(e,t){return Object(q.jsx)(pe.a.Item,{children:e},t)}))})})}var me=Object(s.a)((function(){var e=G().userStore;return Object(q.jsx)(je.d,{initialValues:{displayName:"",username:"",email:"",password:"",error:null},onSubmit:function(t,n){var i=n.setErrors;return e.register(t).catch((function(e){return i({error:e})}))},validationSchema:ve.b({displayName:ve.c().required(),username:ve.c().required(),email:ve.c().required().email(),password:ve.c().required()}),children:function(e){var t=e.handleSubmit,n=e.isSubmitting,i=e.errors,c=e.isValid,r=e.dirty;return Object(q.jsxs)(je.c,{className:"ui form",onSubmit:t,autoComplete:"off",children:[Object(q.jsx)(W.a,{as:"h2",content:"Sign up to activities",color:"teal",textAlign:"center"}),Object(q.jsx)(he,{name:"displayName",placeholder:"Display name"}),Object(q.jsx)(he,{name:"username",placeholder:"Username"}),Object(q.jsx)(he,{name:"email",placeholder:"Email"}),Object(q.jsx)(he,{name:"password",type:"password",placeholder:"Password"}),Object(q.jsx)(je.a,{name:"error",render:function(){return Object(q.jsx)(xe,{errors:i.error})}}),Object(q.jsx)(d.a,{disabled:!r||!c||n,loading:n,positive:!0,content:"Register",type:"submit",fluid:!0})]})}})})),fe=Object(s.a)((function(){var e=G(),t=e.userStore,n=e.modalStore,i=t.isLoggedIn,c=t.user,r=n.openModal;return Object(q.jsx)(Y.a,{inverted:!0,textAlign:"center",vertical:!0,className:"masthead",children:Object(q.jsxs)(a.a,{text:!0,children:[Object(q.jsxs)(W.a,{as:"h1",inverted:!0,children:[Object(q.jsx)(u.a,{size:"massive",src:"/assets/logo.png",alt:"logo",style:{marginBottom:12}}),"Activities"]}),i&&c&&c.token?Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)(W.a,{as:"h2",inverted:!0,content:"Welcome back "}),Object(q.jsx)(d.a,{as:o.a,to:"/activities",size:"huge",inverted:!0,children:"Go to activities!"})]}):Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)(W.a,{as:"h2",inverted:!0,content:"Welcome "}),Object(q.jsx)(d.a,{onClick:function(){return r(Object(q.jsx)(Oe,{}))},size:"huge",inverted:!0,children:"Login"}),Object(q.jsx)(d.a,{onClick:function(){return r(Object(q.jsx)(me,{}))},size:"huge",inverted:!0,children:"Register"})]})]})})})),ge=n(20),ye=n(555),we=n(557);function Ae(e){var t=e.inverted,n=void 0===t||t,i=e.content,c=void 0===i?"Loading...":i;return Object(q.jsx)(we.a,{active:!0,inverted:n,children:Object(q.jsx)(J.a,{content:c})})}function Se(e){var t=Object(je.e)(e.name),n=Object(V.a)(t,2),i=n[0],c=n[1];return Object(q.jsxs)(be.a.Field,{error:c.touched&&!!c.error,children:[Object(q.jsx)("label",{children:e.label}),Object(q.jsx)("input",Object(h.a)(Object(h.a)({},i),e)),c.touched&&c.error?Object(q.jsx)(Q.a,{basic:!0,color:"red",children:c.error}):null]})}var Ce=n(542);function ke(e){var t=Object(je.e)(e.name),n=Object(V.a)(t,3),i=n[0],c=n[1],r=n[2];return Object(q.jsxs)(be.a.Field,{error:c.touched&&!!c.error,children:[Object(q.jsx)("label",{children:e.label}),Object(q.jsx)(Ce.a,{clearable:!0,options:e.options,value:i.value||null,onChange:function(e,t){return r.setValue(t.value)},onBlur:function(){return r.setTouched(!0)},placeholder:e.placeholder}),c.touched&&c.error?Object(q.jsx)(Q.a,{basic:!0,color:"red",children:c.error}):null]})}var Ie=[{text:"Culture",value:"culture"},{text:"Drinks",value:"drinks"},{text:"Film",value:"film"},{text:"Food",value:"food"},{text:"Music",value:"music"},{text:"Travel",value:"travel"}],Le=n(286),Me=n.n(Le);function Fe(e){var t=Object(je.e)(e.name),n=Object(V.a)(t,3),i=n[0],c=n[1],r=n[2];return Object(q.jsxs)(be.a.Field,{error:c.touched&&!!c.error,children:[Object(q.jsx)(Me.a,Object(h.a)(Object(h.a)(Object(h.a)({},i),e),{},{selected:i.value&&new Date(i.value)||null,onChange:function(e){return r.setValue(e)}})),c.touched&&c.error?Object(q.jsx)(Q.a,{basic:!0,color:"red",children:c.error}):null]})}var Pe=Object(s.a)((function(){var e=Object(ge.g)(),t=Object(i.useState)(null),n=Object(V.a)(t,2),c=n[0],r=n[1],a=G().activityStore,s=a.createActivity,l=a.updateActivity,u=a.loadActivity,j=a.loadingInitial,b=Object(ge.i)().id,O=Object(i.useState)(new y),v=Object(V.a)(O,2),p=v[0],x=v[1],m=ve.b({title:ve.c().required(),description:ve.c().required(),categoty:ve.c().required(),date:ve.a().required().nullable(),city:ve.c().required(),venue:ve.c().required()});return Object(i.useEffect)((function(){b&&u(b).then((function(e){return x(new y(e))}))}),[b,u]),j?Object(q.jsx)(Ae,{content:"Loading activity..."}):Object(q.jsxs)(Y.a,{clearing:!0,children:[Object(q.jsx)(W.a,{content:"Activity Detail",sub:!0,color:"teal"}),Object(q.jsx)(je.d,{validationSchema:m,enableReinitialize:!0,initialValues:p,onSubmit:function(t){!function(t){if(t.id)l(t).then((function(){e.push("/activities/".concat(t.id))})).catch((function(e){return r(e)}));else{var n=Object(h.a)(Object(h.a)({},t),{},{id:Object(ye.a)()});s(n).then((function(){e.push("/activities/".concat(n.id))})).catch((function(e){return r(e)}))}}(t)},children:function(e){var t=e.handleSubmit,n=e.isValid,i=e.isSubmitting,c=e.dirty;return Object(q.jsxs)(je.c,{className:"ui form",onSubmit:t,autoComplete:"off",children:[Object(q.jsx)(he,{name:"title",placeholder:"Title"}),Object(q.jsx)(Se,{name:"description",placeholder:"Description",rows:4}),Object(q.jsx)(ke,{options:Ie,name:"category",placeholder:"Category"}),Object(q.jsx)(Fe,{name:"date",placeholderText:"Date",showTimeSelect:!0,timeCaption:"time",dateFormat:"d MMMM yyyy hh:mm"}),Object(q.jsx)(W.a,{content:"Location Details",sub:!0,color:"teal"}),Object(q.jsx)(he,{name:"city",placeholder:"City"}),Object(q.jsx)(he,{name:"venue",placeholder:"Venue"}),Object(q.jsx)(d.a,{disabled:i||!c||!n,loading:i,floated:"right",positive:!0,type:"submit",content:"Save"}),Object(q.jsx)(d.a,{as:o.a,to:"/activities",floated:"right",type:"button",content:"Cancel"})]})}}),c&&Object(q.jsx)(xe,{errors:c})]})})),Ee=n(548),De=n(547),ze=Object(s.a)((function(e){var t=e.activityId,n=G().commentStore;return Object(i.useEffect)((function(){return t&&n.createHubConnection(t),function(){n.clearComments()}}),[n,t]),Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)(Y.a,{textAlign:"center",attached:"top",inverted:!0,color:"teal",style:{border:"none"},children:Object(q.jsx)(W.a,{children:"Chat about this event"})}),Object(q.jsxs)(Y.a,{attached:!0,clearing:!0,children:[Object(q.jsx)(je.d,{onSubmit:function(e,t){var i=t.resetForm;return n.addComment(e).then((function(){return i()}))},initialValues:{body:""},validationSchema:ve.b({body:ve.c().required()}),children:function(e){e.isSubmitting,e.isValid,e.handleSubmit;je.c,je.b}}),Object(q.jsx)(Ee.a.Group,{children:n.comments.map((function(e){return Object(q.jsx)(q.Fragment,{children:Object(q.jsxs)(Ee.a,{children:[Object(q.jsx)(Ee.a.Avatar,{src:e.image||"/assets/user.png"}),Object(q.jsxs)(Ee.a.Content,{children:[Object(q.jsx)(Ee.a.Author,{as:o.a,to:"/profiles/".concat(e.username),children:e.displayName}),Object(q.jsx)(Ee.a.Metadata,{children:Object(q.jsx)("div",{children:Object(De.a)(e.createdAt)})}),Object(q.jsx)(Ee.a.Text,{style:{whiteSpace:"pre-wrap"},children:e.body})]})]},e.id)})}))})]})]})})),Te={filter:"brightness(30%)"},Re={position:"absolute",bottom:"5%",left:"5%",width:"100%",height:"auto",color:"white"},He=Object(s.a)((function(e){var t,n,i=e.activity,c=G().activityStore,r=c.updateAttendance,a=c.loading,s=c.cancelActivityToggle;return Object(q.jsxs)(Y.a.Group,{children:[Object(q.jsxs)(Y.a,{basic:!0,attached:"top",style:{padding:"0"},children:[i.isCancelled&&Object(q.jsx)(Q.a,{style:{position:"absolute",zIndex:1e3,left:-14,top:20},ribbon:!0,color:"red",content:"Cancelled"}),Object(q.jsx)(u.a,{src:"/assets/categoryImages/".concat(i.category,".jpg"),fluid:!0,style:Te}),Object(q.jsx)(Y.a,{style:Re,basic:!0,children:Object(q.jsx)(Z.a.Group,{children:Object(q.jsx)(Z.a,{children:Object(q.jsxs)(Z.a.Content,{children:[Object(q.jsx)(W.a,{size:"huge",content:i.title,style:{color:"white"}}),Object(q.jsx)("p",{children:Object(K.a)(i.date,"dd MMM yyyy hh:mm")}),Object(q.jsxs)("p",{children:["Hosted by ",Object(q.jsx)("strong",{children:Object(q.jsx)(o.a,{to:"/profiles/".concat(null===(t=i.host)||void 0===t?void 0:t.username),children:null===(n=i.host)||void 0===n?void 0:n.displayName})})]})]})})})})]}),Object(q.jsx)(Y.a,{clearing:!0,attached:"bottom",children:i.isHost?Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)(d.a,{color:i.isCancelled?"green":"red",floated:"left",basic:!0,content:i.isCancelled?"Re-activate":"Cancel Activity",onClick:s,loading:a}),Object(q.jsx)(d.a,{as:o.a,disabled:i.isCancelled,color:"orange",floated:"right",to:"/manage/".concat(i.id),children:"Manage Event"})]}):i.isGoing?Object(q.jsx)(d.a,{onClick:r,loading:a,children:"Cancel attendance"}):Object(q.jsx)(d.a,{onClick:r,disabled:i.isCancelled,loading:a,color:"teal",children:"Join Activity"})})]})})),Ne=Object(s.a)((function(e){var t=e.activity;return Object(q.jsxs)(Y.a.Group,{children:[Object(q.jsx)(Y.a,{attached:"top",children:Object(q.jsxs)(U.a,{children:[Object(q.jsx)(U.a.Column,{width:1,children:Object(q.jsx)(X.a,{size:"large",color:"teal",name:"info"})}),Object(q.jsx)(U.a.Column,{width:15,children:Object(q.jsx)("p",{children:t.description})})]})}),Object(q.jsx)(Y.a,{attached:!0,children:Object(q.jsxs)(U.a,{verticalAlign:"middle",children:[Object(q.jsx)(U.a.Column,{width:1,children:Object(q.jsx)(X.a,{name:"calendar",size:"large",color:"teal"})}),Object(q.jsx)(U.a.Column,{width:15,children:Object(q.jsx)("span",{children:Object(K.a)(t.date,"dd MMM yyyy hh:mm")})})]})}),Object(q.jsx)(Y.a,{attached:!0,children:Object(q.jsxs)(U.a,{verticalAlign:"middle",children:[Object(q.jsx)(U.a.Column,{width:1,children:Object(q.jsx)(X.a,{name:"map marker alternate",size:"large",color:"teal"})}),Object(q.jsx)(U.a.Column,{width:11,children:Object(q.jsxs)("span",{children:[t.venue,", ",t.city]})})]})})]})})),Ge=Object(s.a)((function(e){var t=e.activity,n=t.attendees,i=t.host;return n?Object(q.jsxs)(q.Fragment,{children:[Object(q.jsxs)(Y.a,{textAlign:"center",style:{border:"none"},attached:"top",secondary:!0,inverted:!0,color:"teal",children:[n.length," ",1===n.length?"Person":"People"," going"]}),Object(q.jsx)(Y.a,{attached:!0,children:Object(q.jsx)($.a,{relaxed:!0,divided:!0,children:n.map((function(e){return Object(q.jsxs)(Z.a,{style:{position:"relative"},children:[e.username===(null===i||void 0===i?void 0:i.username)&&Object(q.jsx)(Q.a,{style:{position:"absolute"},color:"orange",ribbon:"right",children:"Host"}),Object(q.jsx)(u.a,{size:"tiny",src:e.image||"/assets/user.png"}),Object(q.jsxs)(Z.a.Content,{verticalAlign:"middle",children:[Object(q.jsx)(Z.a.Header,{as:"h3",children:Object(q.jsx)(o.a,{to:"/profiles/".concat(e.username),children:e.displayName})}),e.following&&Object(q.jsx)(Z.a.Extra,{style:{color:"orange"},children:"Following"})]})]},e.username)}))})})]}):Object(q.jsx)(W.a,{as:"h2",content:"There is no attendee"})})),qe=Object(s.a)((function(){var e=G().activityStore,t=e.selectedActivity,n=e.loadActivity,c=e.loadingInitial,r=e.clearSelectedActivity,a=Object(ge.i)().id;return Object(i.useEffect)((function(){return a&&n(a),function(){return r()}}),[a,n,r]),c||!t?Object(q.jsx)(Ae,{content:"Loading..."}):Object(q.jsxs)(U.a,{children:[Object(q.jsxs)(U.a.Column,{width:10,children:[Object(q.jsx)(He,{activity:t}),Object(q.jsx)(Ne,{activity:t}),Object(q.jsx)(ze,{activityId:t.id})]}),Object(q.jsx)(U.a.Column,{width:6,children:Object(q.jsx)(Ge,{activity:t})})]})}));function Be(){return Object(q.jsxs)(Y.a,{placeholder:!0,children:[Object(q.jsxs)(W.a,{icon:!0,children:[Object(q.jsx)(X.a,{name:"search"}),"Oops - we've looked everywhere and could not find this."]}),Object(q.jsx)(Y.a.Inline,{children:Object(q.jsx)(d.a,{as:o.a,to:"/activities",primary:!0,children:"Return to activities page"})})]})}var Ve=Object(s.a)((function(){var e,t,n=G().commonStore;return Object(q.jsxs)(a.a,{children:[Object(q.jsx)(W.a,{as:"h1",content:"Server Error"}),Object(q.jsx)(W.a,{sub:!0,as:"h5",color:"red",content:null===(e=n.error)||void 0===e?void 0:e.message}),(null===(t=n.error)||void 0===t?void 0:t.details)&&Object(q.jsxs)(Y.a,{children:[Object(q.jsx)(W.a,{as:"h4",content:"Stack trace",color:"teal"}),Object(q.jsx)("code",{style:{marginTop:"10px"},children:n.error.details})]})]})})),Ue=n(551),Je=Object(s.a)((function(){var e=G().modalStore;return Object(q.jsx)(Ue.a,{open:e.modal.open,onClose:e.closeModal,size:"mini",children:Object(q.jsx)(Ue.a.Content,{children:e.modal.body})})})),We=n(290);function Ye(e){var t=e.component,n=Object(We.a)(e,["component"]),i=G().userStore.isLoggedIn;return Object(q.jsx)(ge.b,Object(h.a)(Object(h.a)({},n),{},{render:function(e){return i?Object(q.jsx)(t,Object(h.a)({},e)):Object(q.jsx)(ge.a,{to:""})}}))}var Ze=Object(s.a)((function(){var e=Object(ge.h)(),t=G(),n=t.commonStore,c=t.userStore;return Object(i.useEffect)((function(){n.token?c.getUser().finally((function(){return n.setAppLoaded()})):n.setAppLoaded()}),[n,c]),n.appLoaded?Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)(S.a,{position:"bottom-right",hideProgressBar:!0}),Object(q.jsx)(Je,{}),Object(q.jsx)(ge.b,{exact:!0,path:"/",component:fe}),Object(q.jsx)(ge.b,{path:"/(.+)",render:function(){return Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)(B,{}),Object(q.jsx)(a.a,{style:{marginTop:"7em"},children:Object(q.jsxs)(ge.d,{children:[Object(q.jsx)(Ye,{exact:!0,path:"/activities",component:ue}),Object(q.jsx)(Ye,{path:"/activities/:id",component:qe}),Object(q.jsx)(Ye,{path:["/createActivity","/manage/:id"],component:Pe},e.key),Object(q.jsx)(Ye,{path:"/server-error",component:Ve}),Object(q.jsx)(ge.b,{component:Be})]})})]})}})]}):Object(q.jsx)(Ae,{content:"Loading app..."})})),Ke=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,563)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),i(e),c(e),r(e),a(e)}))},Qe=(n(519),n(520),n(521),n(522),n(50));function Xe(){var e=Object(ge.h)().pathname;return Object(i.useEffect)((function(){window.scrollTo(0,0)}),[e]),null}var $e=Object(Qe.a)();r.a.render(Object(q.jsx)(N.Provider,{value:H,children:Object(q.jsxs)(ge.c,{history:$e,children:[Object(q.jsx)(Xe,{}),Object(q.jsx)(Ze,{})]})}),document.getElementById("root")),Ke()}},[[523,1,2]]]);
//# sourceMappingURL=main.66bec077.chunk.js.map