import { Component, ElementRef, ViewChild ,ChangeDetectorRef} from '@angular/core';
import { FormBuilder, FormArray, Validators } from "@angular/forms";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'keep';
  mini = true;
  header: string;
  content:{}
  data=[]
  submitted: boolean;
  searchText = '';
  count=0;
  imagelist=[];
  urls=[]
  
  constructor(    public fb: FormBuilder,
    private cd: ChangeDetectorRef) {
    
   }
   registrationForm = this.fb.group({
    file: [null]
  })  
 

  // dat = [{head:'sample',note:'dfska;fhla'},{head:'sample',note:'dfska;fhla'},{head:'sample',note:'dfska;fhla'}]
  
 toggleSidebar() {
  if (this.mini) {
    console.log("opening sidebar");
    document.getElementById("mySidebar1").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    this.mini = false;
  } else {
    console.log("closing sidebar");
    document.getElementById("mySidebar1").style.width = "85px";
    document.getElementById("main").style.marginLeft = "85px";
    this.mini = true;
  }
}  

notes(){
  document.getElementById('icon').style.height = "150px";
  document.getElementById('clos').style.display="block";
  document.getElementById('task_icon').style.visibility="hidden";
  document.getElementById('create_icon').style.visibility="hidden";
  document.getElementById('img_icon').style.visibility="hidden";
  document.getElementById('pin_icon').style.visibility="visible";
  document.getElementById('textarea').style.marginBottom="-67px";
  document.getElementById('header').style.visibility="visible";
  document.getElementById('alert').style.visibility="visible";
  document.getElementById('use').style.visibility="visible";
  document.getElementById('color_pallet').style.visibility="visible";
  document.getElementById('img').style.visibility="visible";
  document.getElementById('arch').style.visibility="visible";
  document.getElementById('dot').style.visibility="visible";
  document.getElementById('undo').style.visibility="visible";
  document.getElementById('redo').style.visibility="visible";




    
 

}
close(title,note,s,b){
  document.getElementById('icon').style.height="51px";
  document.getElementById('clos').style.display="none";
  document.getElementById('header').style.visibility="hidden"
  document.getElementById('task_icon').style.visibility="visible";
  document.getElementById('textarea').style.marginBottom="-11px";
  document.getElementById('alert').style.visibility="hidden";
  document.getElementById('use').style.visibility="hidden";
  document.getElementById('create_icon').style.visibility="visible";
  document.getElementById('img_icon').style.visibility="visible";
  document.getElementById('pin_icon').style.visibility="hidden";
  document.getElementById('color_pallet').style.visibility="hidden";
  document.getElementById('img').style.visibility="hidden";
  document.getElementById('arch').style.visibility="hidden";
  document.getElementById('dot').style.visibility="hidden";
  document.getElementById('undo').style.visibility="hidden";
  document.getElementById('redo').style.visibility="hidden";





// console.log(title,note)

  this.datarender(title,note)
}

datarender(ti,he){
  

this.data.push({head:ti,note:he})
window.localStorage.setItem('notes_data',JSON.stringify(this.data))

}
marked_close(){
  document.getElementById('top_header').style.display="block"
  document.getElementById('marker_header').style.display="none"
  document.getElementById('notes_style').style.borderColor="#5f6368"
}

pin(){
  this.count = this.count +1
  console.log("dsfa")
  document.getElementById('pin_marker').style.display="block"
  document.getElementById('notes_style').style.borderColor="white"
  document.getElementById('top_header').style.display="none"
  document.getElementById('marker_header').style.display="block"
}


onSelectFile(event) {
  if (event.target.files && event.target.files[0]) {
      var filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
              var reader = new FileReader();

              reader.onload = (event:any) => {
                console.log(event.target.result);
                 this.urls.push(event.target.result); 
              }

              reader.readAsDataURL(event.target.files[i]);
      }
  }
}

}
