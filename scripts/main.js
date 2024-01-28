function RandomColor(inColor){
	Pal[inColor] = Pal[Object.keys(Pal)[Math.floor(Math.random()*(Object.keys(Pal).length+1))]];
	print('Set "'+inColor+'" to [accent]'+Pal.accent);
}
RandomColor("accent");