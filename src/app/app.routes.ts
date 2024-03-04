import { Routes } from '@angular/router';
import { IndexComponent } from './post/index/index.component';
import { ImageComponent } from './post/image/image.component';
import { ViewComponent } from './post/view/view.component';
import { CreateComponent } from './post/create/create.component';
import { EditComponent } from './post/edit/edit.component';
import { Index2Component } from './post/index2/index2.component';
import { VideoComponent } from './post/video/video.component';



export const routes: Routes = [
    { path: 'post', redirectTo: 'post/index2', pathMatch: 'full'},
    { path: 'post/index', component: IndexComponent },
    { path: 'post/:postId/view', component: ViewComponent },
    { path: 'post/create', component: CreateComponent },
    { path: 'post/:postId/edit', component: EditComponent },
    { path: 'post/image', component: ImageComponent },
    { path: 'post/index2', component: Index2Component },
    { path: 'post/video', component: VideoComponent }
    
];
