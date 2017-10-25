function ExpangeCanvas(canvasid, width, height)
{
	// ------------------
	// РџРµСЂРµРјРµРЅРЅС‹Рµ С€РёСЂРёРЅС‹ Рё РІС‹СЃРѕС‚С‹
	// РҐРѕС‚СЏ canvas СЃС‚Р°РІРёС‚ Р·РЅР°С‡РµРЅРёСЏ РїРѕ-СѓРјРѕР»С‡Р°РЅРёСЋ 300 РЅР° 150
	// ------------------
	width = width || 300;
	height = height || 150;
	
	
	// ------------------
	// РќР°С…РѕРґРёРј РЅСѓР¶РЅС‹Р№ РєР°РЅРІР°СЃ
	// ------------------
	this.canvas = document.getElementById(canvasid);
	this.obCanvas = null;
	
	if (this.canvas != null)
	{
		// ------------------
		// РЈСЃС‚Р°РЅР°РІР»РёРІР°РµРј СЂР°Р·РјРµСЂС‹ РєР°РЅРІР°СЃР°
		// ------------------
		this.canvas.width = width;
		this.canvas.height = height;
		
		
		// ------------------
		// РљРѕРЅС‚РµРєСЃС‚ РєР°РЅРІР°СЃР°
		// ------------------
		this.obCanvas = this.canvas.getContext('2d');
	}
	
	
	// ------------------
	// Р РёСЃСѓРµРј Р»РёРЅРёСЋ
	// ------------------
	this.Line = function(x1, y1, x2, y2, linewidth, strokestyle)
	{
		if (this.obCanvas == null) return false;
		
		this.obCanvas.beginPath();
		this.obCanvas.lineWidth = linewidth;
		this.obCanvas.strokeStyle = strokestyle;
		this.obCanvas.moveTo(x1, y1);
		this.obCanvas.lineTo(x2, y2);
		this.obCanvas.stroke();
	}
	
	
	
	
	
	// ------------------
	// Р РёСЃСѓРµРј РєСЂСѓРі
	// ------------------
	this.Circle = function(centerx, centery, radius, linewidth, strokestyle, fillstyle)
	{
		if (this.obCanvas == null) return false;
		
		this.obCanvas.beginPath();
		this.obCanvas.arc(centerx, centery, radius, 0, 2*Math.PI, false);
		this.obCanvas.fillStyle = fillstyle;
		this.obCanvas.fill();
		this.obCanvas.lineWidth = linewidth;
		this.obCanvas.strokeStyle = strokestyle;
		this.obCanvas.stroke();
	}
	
	
	// ------------------
	// Р¤СѓРЅРєС†РёСЏ Р·Р°Р»РёРІР°РµС‚ РєР°РЅРІР°СЃ С†РІРµС‚РѕРј
	// ------------------
	this.SetBgColor = function(bgcolor)
	{
		if (this.obCanvas == null) return false;
		
		this.obCanvas.fillStyle = bgcolor;
		this.obCanvas.fillRect(0, 0, this.obCanvas.canvas.width, this.obCanvas.canvas.height);
	}
}

export default ExpangeCanvas;