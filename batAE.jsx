var dlg = new Window("dialog","BL/batRender",[100,100,300,150]);
dlg.Btn=dlg.add('button',[10,10,190,40], 'pushpush!');
 var fileAE =new File ("C:/Users/eizobaka/Desktop/testAE/Ori.aep")
dlg.Btn.onClick = function (){
    alert("実行しますか？");
    CreateBatAndExecute();
    app.project.save(fileAE) ;
    dlg.close();
}
 
function CreateBatAndExecute(){
    var BatFile = new File("C:/Users/eizobaka/Desktop/testAE/"+"Ori"+".bat")
    if (BatFile){
        BatFile.open("w");
        BatFile.writeln(BatCmd(BatFile));
        BatFile.close();
        //BatFile.execute()
        }
    else{
        alert("batch file create failed")
        }
}
 


function BatCmd(BatFile){
    var Args = "testtest\r\ntest"
    var CMD=Args
    return CMD
}
dlg.show();