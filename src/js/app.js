(function(){

/**
 * Adding the size of the progress bar
 * @callback
 */
document.querySelector('#progressBar').addEventListener('mdl-componentupgraded', function() {
    this.MaterialProgress.setProgress(100);
  });

  /**
   * @param {string} canvas - take elem <canvas></canvas>
   * @param {object} ctx Render content (context)
   */
    const canvas = document.querySelector('#draw');
    const ctx    = canvas.getContext('2d');
    
    /**
     * @param {number} canvas.width Get the full width of the screen
     */
    canvas.width     = window.innerWidth;
     /**
     * @param {number} canvas.height Get the full height of the screen
     */
    canvas.height    = window.innerHeight;
    /**
     * @param {string} ctx.strokeStyle 
     * RU: Цвет прямоугольного контура.
     * ENG:Color a rectangular contour.
     */
    ctx.strokeStyle  = '#bada55';
    /**
     * @param {string} ctx.lineJoin 
     * RU:Свойство lineJoin определяет, как соединяются 
     * два соединительных сегмента (линий, дуг или кривых) 
     * с ненулевой длиной в форме (вырожденные сегменты с нулевой длиной, 
     * заданные конечные точки и контрольные точки находятся точно в одном 
     * и том же положении, пропущены).
     * -------------------------------------
     * ENG: The lineJoin property determines how 
     * two connecting segments (of lines, arcs or curves) with non-zero lengths 
     * in a shape are joined together (degenerate segments with zero lengths, .
     */
    ctx.lineJoin     = 'round';
    /**
     * @param {string} ctx.lineCap  
     * RU: Свойство lineCap определяет, 
     * как выводятся конечные точки каждой строки.
     * Для этого свойства есть 
     * три возможных значения: butt, round и square. 
     * По умолчанию для этого свойства установлено значение butt.
     * ----------------
     * ENG:The lineCap property determines how the end 
     * points of every line are drawn. 
     * There are three possible values for this property and 
     * those are: butt, round and square. 
     * By default this property is set to butt.
     * 
     */
    ctx.lineCap      = 'round';
    /**
     * @param {number} ctx.lineWidth  
     * RU: Это свойство задает толщину текущей строки. 
     * Значения должны быть положительными. 
     * По умолчанию для этого значения установлено 1.0 единицы.
     * ----------------
     * ENG: This property sets the current line thickness. 
     * Values must be positive numbers.
     * By default this value is set to 1.0 units.
     * 
     */
    ctx.lineWidth    = 10;
    
    /**
     * @param {boolean} isDrawing
     * RU: Если кнопка мыши нажата и мы можем рисовать, то true, а иначе false
     * ENG: If the mouse button is clicked and we can draw, then true, otherwise false
     * @param {number} lastX 
     * RU: Определяем положение по x
     * ENG: Determine the position of x
     * @param {number} lastY 
     * RU: Определяем положение по y
     * ENG: Determine the position of y
     * @param {number} hue 
     * RU: Оттенок
     * ENG: Hue
     * @param {boolean} direction
     * RU: Напраление по координате изначально true
     * ENG: The coordinate direction is initially true
     */
    let isDrawing = false,
    lastX     = 0,
    lastY     = 0,
    hue       = 0,
    direction = true;

  })()