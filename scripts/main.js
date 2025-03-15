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
]
function RandomColor(color){
	let pool = Object.keys(Pal);
	blacklist.forEach(e => {
		if(pool.includes(e)){
			pool.pop(e)
		};
	});
	let id = Math.floor(Math.random()*(pool.length+1))
	Pal[color] = Pal[pool[id]];
};
// You can change any other color if you want to
RandomColor("accent");
