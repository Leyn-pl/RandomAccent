// Add colors you don't want to see to blacklist
const blacklist = [
	"gray",
	"metalGrayDark",
	"stoneGray",
	"darkishGray",
	"darkerGray",
	"darkestGray",
	"shadow",
	"darkMetal",
	"darkerMetal",
	"darkestMetal"
];
// Main function
function RandomColor(color){
	let pool = []
	Object.keys(Pal).forEach(key => {
		if (!blacklist.includes(key)) pool.push(key);
	});
	let id = Math.floor(Math.random()*(pool.length+1));
	Pal[color] = Pal[pool[id]];
	// 2.0 changes
	Colors.put(color, Pal[pool[id]]);
	BuildDialog(NewColorDialog.cont, pool[id], String(Pal[pool[id]]))
};
var NewColorDialog;
function BuildDialog(cont, clrName, clr){
	cont.clear();
	cont.image(Icon.pick, Pal[clrName]);
	cont.add("[accent]Pal."+clrName).row();
	cont.add("");
	cont.add("#"+clr);
}
// Menu button to change color
Events.on(ClientLoadEvent, () => {
	// Create color showcase dialog
	NewColorDialog = new BaseDialog("Pal.accent changed");
	NewColorDialog.addCloseButton();
	
	Vars.ui.menufrag.addButton("Random Accent", Icon.pick, () => {;
		RandomColor("accent");
		NewColorDialog.show();
	});
	// You can change any other color if you want to
	RandomColor("accent");
});
