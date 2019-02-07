"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Modal_1 = require("../scripts/modal/Modal");
window.process = process || {};
var ENV = window.process.type == "renderer" ? "electron" : "web";
var url = ENV == "electron" ? null : "http://localhost:3000";
var Store_1 = require("../scripts/store/Store");
var PopupDialog_1 = require("../scripts/utils/PopupDialog");
var Resizer_1 = require("../scripts/utils/Resizer");
var initialState = {
    currentIndex: 0
};
var store = new Store_1.Store(initialState);
var resizer = new Resizer_1.Resizer(store, true);
var popup = new PopupDialog_1.PopupDialog(store);
var modal = new Modal_1.Modal(store);
var test = document.querySelector("#testBtn");
test.addEventListener("click", function () { return modal.open(); });
// const saveBtn = document.querySelector("#saveBtn") as HTMLButtonElement;
// saveBtn.addEventListener("click", () => {
// 	calcSave(null);
// });
var backBtn = document.querySelector("#backBtn");
backBtn.addEventListener("click", handleBack);
// const rejectBtn = document.querySelector("#rejectBtn") as HTMLButtonElement;
// rejectBtn.addEventListener("click", () => {
// 	calcReject(store.getState("calcArray"));
// });
// const deleteBtn = document.querySelector("#deleteBtn") as HTMLButtonElement;
// deleteBtn.addEventListener("click", () => {
// 	calcDelete([store.getState("currentCalc")]);
// });
function handleBack(event) {
    event.preventDefault();
    // const commit: Calc[] = [];
    // let text = "Imate nesacuvane promene.<br>";
    // let check: boolean = false;
    // const array: Calc[] = store.getState("employeeArray");
    // array.forEach(e => {
    // 	if (Object.keys(e.changes).length > 0) {
    // 		check = true;
    // 		commit.push(e);
    // 	}
    // });
    // // TODO: convert to calc
    // commit.forEach(e => {
    // 	text += "calcSummaryTemplate(e)";
    // });
    // if (false) {
    // 	modal.open("Obevestenje", text, () => {
    // 		// calcSave(commit, true);
    // 		window.location.href = window.location.href.substring(0, window.location.href.lastIndexOf("/") + 1) + "mainMenu.html";
    // 	});
    // } else {
    window.location.href = window.location.href.substring(0, window.location.href.lastIndexOf("/") + 1) + "mainMenu.html";
    // }
}
// function setCalc(data: CalcProps[] | CalcProps): void {
// 	const array: Calc[] = [];
// 	if (data instanceof Array) {
// 		data.forEach(e => {
// 			array.push(new Calc(e));
// 		});
// 		store.setState("currentCalc", array[0]);
// 		store.setState("calcArray", array);
// 		store.setState("calcList", array);
// 	}
// }
//
// function calcDelete(calcsToDelete: Calc[]): void {
// 	if (calcsToDelete.length > 0) {
// 		let text = "Da li ste sigurni da zelite da obrisete ove unose?";
// 		calcsToDelete.forEach(e => {
// 			text += calcSummaryTemplate(e);
// 		});
// 		modal.open("Upozorenje", text, () => {
// 			const toDelete: CalcProps[] = [];
// 			calcsToDelete.forEach(calc => {
// 				const calcs: Calc[] = store.getState("calcArray");
// 				const newCalc: Calc = store.getState("newCalc");
// 				calcs.splice(calcs.indexOf(calc), 1);
// 				store.setState("calcArray", calcs);
// 				if (calcs.length > 0) {
// 					store.setState("currentCalc", calcs[0]);
// 				}
// 				if (newCalc) {
// 					if (newCalc.properties.id == calc.properties.id) store.setState("newCalc", null);
// 				} else {
// 					toDelete.push(calc.properties);
// 				}
// 			});
// 			calcDeleteHandler(toDelete);
// 		});
// 	}
// }
// function calcReject(array: Calc[] | null): void {
// 	const calcs: Calc[] = array ? array : store.getState("calcArray");
// 	let text = "Da li zelite da odbacite sve promene?<br>";
// 	const calcsToReject: Calc[] = [];
// 	calcs.forEach(calc => {
// 		if (Object.keys(calc.changes).length > 0) {
// 			calcsToReject.push(calc);
// 			text += calcSummaryTemplate(calc);
// 		}
// 	});
// 	if (calcsToReject.length > 0) {
// 		modal.open("Upozorenje", text, () => {
// 			calcsToReject.forEach((calc, i) => {
// 				const keys: string[] = Object.keys(calc.changes);
// 				if (keys.length > 0) {
// 					keys.forEach(k => {
// 						delete calc.changes[k];
// 					});
// 				}
// 				store.setState("currentCalc", calcsToReject[i]);
// 			});
// 			store.setState("calcArray", store.getState("calcArray"));
// 			store.setState("currentCalc", store.getState("calcArray")[0]);
// 		});
// 	} else {
// 		modal.open("Obavestenje", "Nema trenutnih promena.");
// 	}
// }
// function calcSave(array: Calc[], skipModal?: boolean): void {
// 	if (skipModal) {
// 		const save: CalcProps[] = [];
// 		array.forEach(e => {
// 			e.commitChanges();
// 			save.push(e.properties);
// 		});
// 		store.setState("newCalc", null);
// 		calcSaveHandler(save);
// 	} else {
// 		const commit: Calc[] = [];
// 		let check: boolean = false;
// 		const calcs: Calc[] = array ? array : store.getState("calcArray");
// 		calcs.forEach(e => {
// 			if (Object.keys(e.changes).length > 0) {
// 				check = true;
// 			}
// 		});
// 		if (check) {
// 			let text: string = "";
// 			calcs.forEach(e => {
// 				if (Object.keys(e.changes).length > 0) {
// 					text += calcSummaryTemplate(e);
// 					commit.push(e);
// 				}
// 			});
//
// 			modal.open("Da li zelite da sacuvate sve promene?", text, () => {
// 				const save: CalcProps[] = [];
// 				commit.forEach(e => {
// 					e.commitChanges();
// 					save.push(e.properties);
// 				});
// 				store.setState("newCalc", null);
// 				calcSaveHandler(save);
// 			});
// 		} else {
// 			modal.open("Obavestenje", "Nema izmena");
// 		}
// 	}
// }
// function calcGetHandler() {
// 	console.log(ENV == "electron");
// 	if (ENV == "electron") {
// 		setCalc(ipcRenderer.sendSync("calc:get", null));
// 	} else {
// 		axios
// 			.get(`${url}/calcs`)
// 			.then(response => {
// 				console.log(response.data);
// 				setCalc(response.data);
// 			})
// 			.catch(err => console.log(err));
// 	}
// }
// function calcDeleteHandler(calcs: CalcProps[]) {
// 	if (ENV == "electron") {
// 		const result: CalcProps[] = ipcRenderer.sendSync("calc:delete", calcs);
// 		setCalc(result);
// 	} else {
// 		axios
// 			.post(`${url}/calcs/delete`, {calcs})
// 			.then(response => {
// 				console.log(response.data);
// 				setCalc(response.data);
// 			})
// 			.catch(err => console.log(err));
// 	}
// }
// function calcSaveHandler(save: CalcProps[]) {
// 	if (ENV == "electron") {
// 		setCalc(ipcRenderer.sendSync("calc:save", save));
// 	} else {
// 		axios
// 			.post(`${url}/calcs/save`, {save})
// 			.then(response => {
// 				console.log(response.data);
// 				setCalc(response.data);
// 			})
// 			.catch(err => console.log(err));
// 	}
// }
// window.onload = () => calcGetHandler();
