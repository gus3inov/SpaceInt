(function(){
  
/**
 * @fileOverview Модуль для выросовки контуров
 */

  /**
   * @const {Element} canvas - take elem <canvas></canvas>
   * @const {object} ctx Render content (context)
   */
    const canvas = document.querySelector(`#draw`);
    const ctx    = canvas.getContext(`2d`);

    /**
     * @type {number} canvas.width Get the full width of the screen
     */
    canvas.width     = window.innerWidth - 4;
     /**
     * @type {number} canvas.height Get the full height of the screen
     */
    canvas.height    = window.innerHeight - 133;


    /**
     * @type {string} ctx.lineJoin 
     * RU:Свойство lineJoin определяет, как соединяются 
     * два соединительных сегмента (линий, дуг или кривых) 
     * с ненулевой длиной в форме (вырожденные сегменты с нулевой длиной, 
     * заданные конечные точки и контрольные точки находятся точно в одном 
     * и том же положении, пропущены).
     * https://developer.mozilla.org/ru/docs/Web/API/Canvas_API/Tutorial/Применение_стилей_и_цветов
     * -------------------------------------
     * ENG: The lineJoin property determines how 
     * two connecting segments (of lines, arcs or curves) with non-zero lengths 
     * in a shape are joined together (degenerate segments with zero lengths, .
     */
    ctx.lineJoin     = `round`;
    /**
     * @type {string} ctx.lineCap  
     * RU: Свойство lineCap определяет, 
     * как выводятся конечные точки каждой строки.
     * Для этого свойства есть 
     * три возможных значения: butt, round и square. 
     * По умолчанию для этого свойства установлено значение butt.
     * https://developer.mozilla.org/ru/docs/Web/API/Canvas_API/Tutorial/Применение_стилей_и_цветов
     * ----------------
     * ENG:The lineCap property determines how the end 
     * points of every line are drawn. 
     * There are three possible values for this property and 
     * those are: butt, round and square. 
     * By default this property is set to butt.
     * 
     */
    ctx.lineCap      = `round`;
    /**
     * @type {number} ctx.lineWidth  
     * RU: Это свойство задает толщину текущей строки. 
     * Значения должны быть положительными. 
     * По умолчанию для этого значения установлено 1.0 единицы.
     * https://developer.mozilla.org/ru/docs/Web/API/Canvas_API/Tutorial/Применение_стилей_и_цветов
     * ----------------
     * ENG: This property sets the current line thickness. 
     * Values must be positive numbers.
     * By default this value is set to 1.0 units.
     * 
     */
    ctx.lineWidth    = 10;
    
    /**
     * @type {boolean} isDrawing
     * RU: Если кнопка мыши нажата и мы можем рисовать, то true, а иначе false
     * ----------------
     * ENG: If the mouse button is clicked and we can draw, then true, otherwise false
     * @type {number} lastX 
     * RU: Определяем положение по x
     * ----------------
     * ENG: Determine the position of x
     * @type {number} lastY 
     * RU: Определяем положение по y
     * ----------------
     * ENG: Determine the position of y
     * @type {number} hue 
     * RU: Оттенок
     * ----------------
     * ENG: Hue
     * @type {boolean} direction
     * RU: Напраление по координате изначально true
     * ----------------
     * ENG: The coordinate direction is initially true
     * @type {boolean} drawFigurBool
     * RU: Вырисовка фигуры
     * ----------------
     * ENG: Drawing a shape
     */
    let isDrawing = false,
    lastX     = 0,
    lastY     = 0,
    hue       = 0,
    direction = true,
    drawShapeBool = false;

    /**
     * @param {number, number} drawCircle
     */
    function drawCircle(lastX, lastY)
    {     

      ctx.beginPath();
      ctx.arc(lastX, lastY, 50, 0, 2*Math.PI, false);
      ctx.fillStyle = colorPenInput.value;
      ctx.fill();
      ctx.lineWidth = 1;
      ctx.strokeStyle = colorPenInput.value;
      ctx.stroke();
    }
    /**
     * @event click
     * Change drawShapeBool on true
     */
    addCircle.onclick = () => drawShapeBool = true; 

        canvas.onmousedown= (e) =>{
          if(drawShapeBool){
            drawCircle(e.offsetX, e.offsetY);
        }
      }

    /**
     * @type {number} 
     * RU: Функция для вырисовывания, которая принимает число (координаты по x и y)
     * ----------------
     * ENG: A function for drawing that takes a number (x and y coordinates)
     */

    function drawRainbow(e){
        /**
         * @returns
         * RU: Если isDrawing === false - то выходим из функции
         * ----------------
         * ENG: If isDrawing === false, then we exit the function
         */
        if(!isDrawing) return;
        /**
         * @type {string} ctx.strokeStyle
         * RU: Hsl - это формат цвета, при движении мыши переменная hue увеличивается
         * и соотвественно за счёт чего цвет меняется
         * ----------------
         * ENG: Hsl is a color format, when the mouse moves, the variable hue increases
          * and, as a result, the color changes
         */
        ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
        /**
         * @function beginPath
         * RU: Создает новый контур. После создания используется 
         * в дальнейшем командами рисования при построении контуров.
         * https://developer.mozilla.org/ru/docs/Web/API/Canvas_API/Tutorial/Рисование_фигур
         * ----------------
         * ENG: Creates a new path. After the creation is used
          * In the future, drawing commands when building contours.
         */
        ctx.beginPath();
        /**
         * @function moveTo
         * RU: Перемещает перо в точку с координатами x и y.
         * https://developer.mozilla.org/ru/docs/Web/API/Canvas_API/Tutorial/Рисование_фигур
         * ----------------
         * ENG: Moves the pen to a point with the coordinates x and y.
         */
        //start from
        ctx.moveTo(lastX, lastY);
        /**
         * @function lineTo
         * RU: Рисует линию с текущей позиции до позиции, определенной x и y
         * https://developer.mozilla.org/ru/docs/Web/API/Canvas_API/Tutorial/Рисование_фигур
         * ----------------
         * ENG: Draws a line from the current position to the position defined by x and y
         */
        //go to
        ctx.lineTo(e.offsetX, e.offsetY);
        /**
         * @function stroke
         * RU: Рисует фигуру с внешней обводкой.
         * https://developer.mozilla.org/ru/docs/Web/API/Canvas_API/Tutorial/Рисование_фигур
         * ----------------
         * ENG: Draws a shape with an outer stroke.
         */
        ctx.stroke();
        /**
         * @type {number} lastX = e.offsetX 
         * @type {number} lastY = e.offsetY
         * @type {number} e.offsetX 
         * RU: Координаты по X
         * ----------------
         * ENG: Coordinates of X
         * @type {number} e.offsetY
         * * RU: Координаты по Y
         * ----------------
         * ENG: Coordinates of Y
         */
        [lastX, lastY] = [e.offsetX, e.offsetY];
        
        /**
         * @type hue
         * RU: Увеличиваем оттенок - за счёт чего меняется цвет в hsl формате
         * ----------------
         * ENG: Increase the hue - due to what changes the color in the hsl format
         */
        hue++;
        /**
         * @returns hue
         * RU: Если hue больше, либо равно 360, то 
         * мы перебрасываем его обратно на ноль и начинаем инкрементировать
         * снова
         * ----------------
         * ENG: If the hue is greater than or equal to 360, then
          * we reset it back to zero and start incrementing
         */
        if(hue >= 360){
          hue = 0;
        }

        /**
         * @returns direction
         * RU: если толщина строки больше или равно 10,
         *  или меньше или равно, то мы direction меняем на false значение
         * --------------
         * if the line thickness is greater than or equal to 10,
         * or less or equal, then we change the direction to false
         */
        if(ctx.lineWidth >= 100 || ctx.lineWidth <= 1){
          direction = !direction;
        }
        
        /**
         * @returns ctx.lineWidth++;
         * RU: Если direction === true, то мы увеличиваем толщину, а если
         * direction === false то мы уменьшаем толщину
         * --------------
         * ENG: If direction === true, then we increase the thickness, and if
         * direction === false then we reduce the thickness
         */
        if(direction){
          ctx.lineWidth++;
      }else{
          ctx.lineWidth--;
       }
        
      }

      function draw(e){
        /**
         * @returns
         * RU: Если isDrawing === false - то выходим из функции
         * ----------------
         * ENG: If isDrawing === false, then we exit the function
         */
        if(!isDrawing) return;
        /**
         * @function beginPath
         * RU: Создает новый контур. После создания используется 
         * в дальнейшем командами рисования при построении контуров.
         * https://developer.mozilla.org/ru/docs/Web/API/Canvas_API/Tutorial/Рисование_фигур
         * ----------------
         * ENG: Creates a new path. After the creation is used
          * In the future, drawing commands when building contours.
         */
        ctx.beginPath();
        /**
         * @function moveTo
         * @param {number, number}
         * RU: Перемещает перо в точку с координатами x и y.
         * https://developer.mozilla.org/ru/docs/Web/API/Canvas_API/Tutorial/Рисование_фигур
         * ----------------
         * ENG: Moves the pen to a point with the coordinates x and y.
         */
        //start from
        ctx.moveTo(lastX, lastY);
        /**
         * @function lineTo
         * @param {number, number}
         * RU: Рисует линию с текущей позиции до позиции, определенной x и y
         * https://developer.mozilla.org/ru/docs/Web/API/Canvas_API/Tutorial/Рисование_фигур
         * ----------------
         * ENG: Draws a line from the current position to the position defined by x and y
         */
        //go to
        ctx.lineTo(e.offsetX, e.offsetY);
        /**
         * @function stroke
         * RU: Рисует фигуру с внешней обводкой.
         * https://developer.mozilla.org/ru/docs/Web/API/Canvas_API/Tutorial/Рисование_фигур
         * ----------------
         * ENG: Draws a shape with an outer stroke.
         */
        ctx.stroke();
        /**
         * @type {number} lastX = e.offsetX 
         * @type {number} lastY = e.offsetY
         * @type {number} e.offsetX 
         * RU: Координаты по X
         * ----------------
         * ENG: Coordinates of X
         * @type {number} e.offsetY
         * * RU: Координаты по Y
         * ----------------
         * ENG: Coordinates of Y
         */
        [lastX, lastY] = [e.offsetX, e.offsetY];
        
        
      }

      /**
       * @event canvas
       * RU: При нажатии на левую кнопку мыши, мы меняем
       * переменную isDrawing на true, за счёт чего функция продолжает
       * свою работу.
       * Далее присваиваем координаты к переменным lastX и lastY, за счёт
       * чего ctx.moveTo(lastX, lastY); срабатывает и функция moveTo рисует
       * с начала этой позиции
       * --------------
       * ENG: When you click on the left mouse button, we change
       * The variable isDrawing to true, due to what the function continues
       * my job.
       * Next, assign coordinates to variables lastX and lastY, at the cost of
       * what is ctx.moveTo (lastX, lastY); triggers and the moveTo function draws
       * from the beginning of this position
       */
      canvas.addEventListener(`mousedown`, (e) => {
        isDrawing = true;
        [lastX, lastY] = [e.offsetX, e.offsetY];
      });
                    
      /**
       * @event draw
       * RU: При движении мыши мы выполняем функции draw
       * --------------
       * ENG: When the mouse moves, we perform the functions draw
       */
      canvas.addEventListener(`mousemove`, draw);

      /**
       * @type {Element} 
       */
      const changeMode = document.getElementById(`switch-1`);

      /**
       * @event click 
       * Change mode
       */
      changeMode.onclick = () => {
        if(changeMode.checked == true){
          canvas.addEventListener(`mousemove`, drawRainbow);
        }else{
          canvas.removeEventListener(`mousemove`, drawRainbow);
          ctx.lineWidth    = 10;
          ctx.strokeStyle = colorInput.value;
          canvas.addEventListener(`mousemove`, draw);
        }

        let snackbarContainer = document.querySelector(`#demo-snackbar-example`);
        var data = {
          message: `You change mode`,
          timeout: 2000,
          actionHandler: `das`,
          actionText: ` `
        };
        snackbarContainer.MaterialSnackbar.showSnackbar(data);

      }

      /**
       * @event arrowFunc
       * RU: После вызова функции мы снова присваиваем переменной
       * значение true
       * --------------
       * ENG: After calling the function, we assign the variable again
       * true
       */
      canvas.addEventListener(`mousedown`, () => isDrawing = true);
      /**
       * @event arrowFunc
       * RU: Когда мы отпустили левую кнопку мыши переменной
       * isDrawing присваивается значение false и работа draw функции прекращается
       * --------------
       * ENG: When we released the left mouse button of the variable
       * isDrawing is set to false and the work of the draw function is terminated
       */
      canvas.addEventListener(`mouseup`, () => {
        isDrawing = false;  
        drawShapeBool = false;
      });
      /**
       * @event arrowFunc
       * RU: Если мышь вышла за пределы canvas, то переменной
       * isDrawing присваивается значение false и работа draw функции прекращается
       * --------------
       * ENG: If the mouse went beyond the canvas, then the variable
        * isDrawing is set to false and the work of the draw function is terminated
       */
      canvas.addEventListener(`mouseout`, () => isDrawing = false);
      

      /** 
       * @event input
       * @returns number
       */
      lineWidth.addEventListener("input", () => {
        ctx.lineWidth = lineWidth.value;
        localStorage.setItem('localLineWidth', ctx.lineWidth);
    }, false); 

    /**
       * @type {number}
       * localStorage
       */
    let localGetLineWidth = localStorage.getItem('localLineWidth');
    ctx.lineWidth = localGetLineWidth;
    lineWidth.value = localGetLineWidth;

        /**
       * @type {Element}
       * @type {Element}
       */
      const colorPenInput = document.getElementById(`colorPen`);
      const colorBgInput = document.getElementById(`colorBg`);

       /** 
       * @event input
       * @returns {string}
       */
      colorPenInput.oninput = function() { 
        let currentVal = this.value;
          if(currentVal) ctx.strokeStyle  = currentVal;
        let snackbarContainer = document.querySelector(`#demo-snackbar-example`);
        var data = {
          message: `Button color ${currentVal}`,
          timeout: 2000,
          actionHandler: currentVal,
          actionText: `Undo`
        };
        snackbarContainer.MaterialSnackbar.showSnackbar(data);
        addCircle.style.backgroundColor = currentVal;
        localStorage.setItem(`colorPen`, ctx.strokeStyle)
      }
      
      /**
       * @type {string}
       * localStorage
       */
      let localGetPen     = localStorage.getItem(`colorPen`);
      ctx.strokeStyle     = localGetPen;
      colorPenInput.value = getHexRGBColor(localGetPen);
      addCircle.style.backgroundColor = localGetPen;
      
      /** 
       * @event input
       * @returns {string}
       */
      colorBgInput.oninput = function() {
        let currentVal = this.value;
          if(currentVal)  canvas.style.backgroundColor  = currentVal;
        let snackbarContainer = document.querySelector(`#demo-snackbar-example`);
        var data = {
          message: `Button color ${currentVal}`,
          timeout: 2000,
          actionHandler: currentVal,
          actionText: `Undo`
        };
        snackbarContainer.MaterialSnackbar.showSnackbar(data);
        localStorage.setItem(`colorBg`, canvas.style.backgroundColor)
      }

      /** 
       * @returns {string}
       * @param {string}
       */
      function getHexRGBColor(color)
      {
        color = color.replace(/\s/g,"");
        var aRGB = color.match(/^rgb\((\d{1,3}[%]?),(\d{1,3}[%]?),(\d{1,3}[%]?)\)$/i);
      
        if(aRGB)
        {
          color = '';
          for (var i=1;  i<=3; i++) color += Math.round((aRGB[i][aRGB[i].length-1]=="%"?2.55:1)*parseInt(aRGB[i])).toString(16).replace(/^(.)$/,'0$1');
        }
        else color = color.replace(/^#?([\da-f])([\da-f])([\da-f])$/i, '$1$1$2$2$3$3');
               
        return color;
      }
      
      /**
       * @type {string}
       * localStorage
       */
      let localGetBg               =    localStorage.getItem(`colorBg`);
      canvas.style.backgroundColor = localGetBg;
      colorBgInput.value           = `#${getHexRGBColor(localGetBg)}`;

      const eraserDrawElem = document.getElementById('eraserDraw');

      /**
       * @type {boolean} isClearing
       * for check we choose eraser or not 
       */
      let isClearing = false;
      
      /**
       * @returns {number}
       * @param {*} e 
       * Eraser function 
       */
     function eraserDraw(e){
      if(!isClearing) return;
      ctx.beginPath();
      ctx.globalCompositeOperation="destination-out";
      ctx.arc(lastX,lastY,8,0,Math.PI*2,false);
      ctx.fill();
      [lastX, lastY] = [e.offsetX, e.offsetY];
      
     }


     eraserDrawElem.onclick = () => isClearing = true;

     canvas.addEventListener('mousedown', (e) => {
      if(!isClearing) return;
      [lastX, lastY] = [e.offsetX, e.offsetY];
    });
                  
    canvas.addEventListener('mousemove', eraserDraw );
    canvas.addEventListener('mouseup', () => isClearing = false);
    canvas.addEventListener('mouseout', () => isClearing = false);

  })()