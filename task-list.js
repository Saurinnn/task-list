'use strict';
const taskMonth = document.getElementById("taskmonth");
const taskStatus = document.getElementById("taskstatus");
const taskTitle = document.getElementById("tasktitle");
const taskDetail = document.getElementById("taskdetail");
const submitButton = document.getElementById("submit");
const taskListTbody = document.getElementById("tasklist");
let tasks = [];

submitButton.onclick = () => {
 //taskオブジェクトにタスクの情報を登録する
 const task = {
  month: taskMonth.value, //実施月
  status: taskStatus.value, //進捗
  title: taskTitle.value, //タイトル
  detail: taskDetail.value //概要
 }
 addTask(task);
 
 //フォームの初期化
 taskMonth.value = "";
 taskStatus.value = "済";
 taskTitle.value ="";
 taskDetail.value = "";
 }

function addTask(task){
  tasks.push(task);
  savaTask();
  displayTaskList();
}

function savaTask(){
  const jsonString = JSON.stringify(tasks);
  localStorage.setItem('tasks',jsonString);
}

function deleteTask(deleteIndex){
  tasks.splice(deleteIndex,1);
  displayTaskList();
}

function displayTaskList(){
  taskListTbody.innerText="";
  for(let i = 0;i < tasks.length;i++){
    const task = tasks[i];
    // テーブル行を作る
    const taskTr = document.createElement('tr');
    const monthTd = document.createElement('td');
    taskListTbody.appendChild(taskTr);
    monthTd.innerText = task.month;
    taskTr.appendChild(monthTd);
    const statusTd = document.createElement('td');
    statusTd.innerText = task.status;
    taskTr.appendChild(statusTd);
    const titleTd = document.createElement('td');
    titleTd.innerText = task.title;
    taskTr.appendChild(titleTd);
    const detailTd = document.createElement('td');
    detailTd.innerText = task.detail;
    taskTr.appendChild(detailTd);
    const deleteTd = document.createElement('td');
    const deleteButton = document.createElement('button');
    deleteButton.innerText = "削除";
    deleteButton.onclick = () =>{
      deleteTask(i);
    }
    deleteTd.innerText = deleteButton;
    taskTr.appendChild(deleteButton);

  }
}

//サンプルデータを追加
function addSample(){
  const task = {
    month: 	"2021-07", //実施月
    status: "済", //進捗
    title: "A 社経営統合プロジェクト", //タイトル
    detail: '経営統合に伴う業務プロセス統合プロジェクト。\nプロジェクトリーダー（メンバー４人）として担当。\nＱＤＣ目標いずれも達成。ＣＳ評価で５をいただいた。' //概要
   }
   addTask(task);
}

addSample();