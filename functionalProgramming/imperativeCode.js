//function factory para criação de tabs
let Window = function(tabs){
    this.tabs = tabs;
};

Window.prototype.join = function(otherWindow){
    this.tabs = this.tabs.concat(otherWindow.tabs);

    return this;

}

Window.prototype.tabOpen = function(tab){
    this.tabs.push(tab);

    return this;
}

Window.prototype.tabClose = function(index){
    //let tabsBeforeIndex = this.tabs.splice(0,index)
    //let tabsAfterindex = this.tabs.splice(index,1);

    this.tabs.splice(index,1);

    return this;
}

let workWindow = new Window(['Gmail', 'Inbox', 'Work email', 'Docs', 'freecodecamp']);
console.log(workWindow);

let socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']);
console.log(socialWindow);

let videoWindow = new Window(['Netflix','Yputube','Vimeo','Vine']);
console.log(videoWindow);

let finalTabs = socialWindow.tabOpen('new Tab');

videoWindow.tabClose(2);


finalTabs.join(videoWindow);


workWindow.tabClose(1);
workWindow.tabOpen('new tab');

finalTabs.join(workWindow);

console.log(finalTabs);
