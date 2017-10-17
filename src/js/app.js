(function(){
console.log("dd");
/**
 * Adding the size of the progress bar
 * @function
 * @callback
 */
// document.querySelector('#progressBar').addEventListener('mdl-componentupgraded', function() {
//     this.MaterialProgress.setProgress(100);
//   });

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
     * https://developer.mozilla.org/ru/docs/Web/API/Canvas_API/Tutorial/Применение_стилей_и_цветов
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
     * https://developer.mozilla.org/ru/docs/Web/API/Canvas_API/Tutorial/Применение_стилей_и_цветов
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
     * https://developer.mozilla.org/ru/docs/Web/API/Canvas_API/Tutorial/Применение_стилей_и_цветов
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
     * ----------------
     * ENG: If the mouse button is clicked and we can draw, then true, otherwise false
     * @param {number} lastX 
     * RU: Определяем положение по x
     * ----------------
     * ENG: Determine the position of x
     * @param {number} lastY 
     * RU: Определяем положение по y
     * ----------------
     * ENG: Determine the position of y
     * @param {number} hue 
     * RU: Оттенок
     * ----------------
     * ENG: Hue
     * @param {boolean} direction
     * RU: Напраление по координате изначально true
     * ----------------
     * ENG: The coordinate direction is initially true
     */
    let isDrawing = false,
    lastX     = 0,
    lastY     = 0,
    hue       = 0,
    direction = true;

    /**
     * @constructor
     * @param {number} 
     * RU: Функция для вырисовывания, которая принимает число (координаты по x и y)
     * ----------------
     * ENG: A function for drawing that takes a number (x and y coordinates)
     */
    function draw(e){
        /**
         * @returns
         * RU: Если isDrawing === false - то выходим из функции
         * ----------------
         * ENG: If isDrawing === false, then we exit the function
         */
        if(!isDrawing) return;
        /**
         * @param {string} ctx.strokeStyle
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
         * @function lineTo
         * RU: Рисует фигуру с внешней обводкой.
         * https://developer.mozilla.org/ru/docs/Web/API/Canvas_API/Tutorial/Рисование_фигур
         * ----------------
         * ENG: Draws a shape with an outer stroke.
         */
        ctx.stroke();
        /**
         * @param {number} lastX = e.offsetX 
         * @param {number} lastY = e.offsetY
         * @param {number} e.offsetX 
         * RU: Координаты по X
         * ----------------
         * ENG: Coordinates of X
         * @param {number} e.offsetY
         * * RU: Координаты по Y
         * ----------------
         * ENG: Coordinates of Y
         */
        [lastX, lastY] = [e.offsetX, e.offsetY];
        
        /**
         * @param hue
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
      canvas.addEventListener('mousedown', (e) => {
        isDrawing = true;
        [lastX, lastY] = [e.offsetX, e.offsetY];
      });
                    
      /**
       * @event draw
       * RU: При движении мыши мы выполняем функции draw
       * --------------
       * ENG: When the mouse moves, we perform the functions draw
       */
      canvas.addEventListener('mousemove', draw);
      /**
       * @event arrowFunc
       * RU: После вызова функции мы снова присваиваем переменной
       * значение true
       * --------------
       * ENG: After calling the function, we assign the variable again
       * true
       */
      canvas.addEventListener('mousedown', () => isDrawing = true);
      /**
       * @event arrowFunc
       * RU: Когда мы отпустили левую кнопку мыши переменной
       * isDrawing присваивается значение false и работа draw функции прекращается
       * --------------
       * ENG: When we released the left mouse button of the variable
       * isDrawing is set to false and the work of the draw function is terminated
       */
      canvas.addEventListener('mouseup', () => isDrawing = false);
      /**
       * @event arrowFunc
       * RU: Если мышь вышла за пределы canvas, то переменной
       * isDrawing присваивается значение false и работа draw функции прекращается
       * --------------
       * ENG: If the mouse went beyond the canvas, then the variable
        * isDrawing is set to false and the work of the draw function is terminated
       */
      canvas.addEventListener('mouseout', () => isDrawing = false);
      
    //   MylineWidth.oninput = () => {
    //     let currentVal = this.value.trim();
    //       if(currentVal) return ctx.lineWidth = currentVal;
    //     console.log(currentVal);
    //   }
      
      //If we want change color in manual
      /*MyColorStroke.oninput = function() {
        let currentVal = this.value;
          if(currentVal) return ctx.strokeStyle  = currentVal;
        console.log(currentVal);
      }*/
      
    //   MySelect.onchange = () => {
    //      let lineJoinValue = document.getElementById("MySelect").value;
    //     ctx.lineCap   = lineJoinValue;
    //   }

  })()