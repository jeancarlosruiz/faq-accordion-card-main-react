# Frontend Mentor - FAQ accordion card solution

![Design preview for the FAQ accordion card coding challenge](design/desktop-preview.jpg)

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

### Links

- Solution URL: [Solution URL](https://github.com/jeancarlosruiz/faq-accordion-card-main-react)
- Live Site URL: [Faq-Accordion-React](https://jeancarlosruiz.github.io/faq-accordion-card-main-react/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/)

### What I learned

#### Spanish

En esta ocasión quise implementar lo que he aprendido de ReactJs a este pequeño proyecto, la verdad me siento muy orgulloso de poder completar y dar inicio a lo que sera mi carrera en ReactJs ☺️.

A continuación una manera más detallada de lo que se implemento en este proyecto:

#### English

In this case, I wanted to get into practice what I've learned about ReactJs for this small project, I am proud of myself for completing this project and getting stareted to my ReactJs Developer journey.

A way more detailed of what I implemented in this proyect below:

#### Mapping Over Data:

##### Spanish

Para hacer aun mas reutilizable esta aplicación decidí hacer mapping over data, creando un array de objects con las preguntas y respuestas que tiene el proyecto. Cree una función que me retorne la pregunta y la respuesta de la data ya creada.

##### English

To make this application even more reusable I decided to map over data, creating an array of objects with the questions and answers that the project has. I created a function that returns the question and the answer from the data already created.

#### Key:

##### Spanish

Los keys existen para mostrar React la ruta. Al identificar de forma única cada elemento en todas los snapshots, React puede determinar exactamente qué hacer, lo que garantiza el mejor rendimiento y evita problemas de casos extremos.

En este proyecto no son dados los keys de los elementos, por el que decidí implementar lo aprendido dándole como key el index del arrey como lo demuestro debajo:

##### English

The keys exist to show React the path. By uniquely identifying each item in all snapshots, React can determine exactly what to do, ensuring the best performance and avoiding edge-case issues.

In this project, the keys of the elements are not given, so I decided to implement what I learned by giving the index of the array as a key, as I show you below:

```js
    <section>
      {data.map((faq, index) => (
        <QuestionItem
        key={index}
        question={faq.question} answer={faq.answer} />
      ))}
    </section>);
```

##### Spanish

De esta forma tendrá de manera única un key para cada elemento aun cuando le queramos agregar mas preguntas y respuestas.

##### English

In this case you will have a unique key for each element even when we want to add more questions and answers.

#### useState():

##### Spanish

Para la interacción del show/hide utilice un useState dándole como valor inicial un boolean falso el cual me permita una vez este sea true me muestre las respuestas.

##### English

For the show/hide interaction, I used a useState, giving it a false boolean as the initial value, which allows me to show the answers once it is true.

#### && Operator:

##### Spanish

Para mostrar las respuestas cree un && operator el cual solo se mostrara cuando el useState sea true:

##### English

To display the answers, I created an && operator which will only display when the useState is true:

```js
{
  show && <dd className="answer">{answer}</dd>;
}
```

#### Ternary Operator:

##### Spanish

Para crear los cambios en las clases como lo son el cambio de dirección de las flechas y las preguntas en negrita implemente un ternary operator que al igual que el use state estas serán agregados solo cuando sean true:

##### English

To create the changes in the classes, such as the change of direction of the arrows and the questions in bold, I set a ternary operator that, like the use state, these will be added only when they are true:

```js
<button
  // Resto del codigo
  className={show ? "button bold" : "button"}
>
  {question}
</button>

 <img
// Rest of the code
 className={show ? "arrow active" : "arrow"
//  Rest of the code
 />
```

### Continued development

#### Spanish

Continuare aprendiendo para seguir poniendo en practica en pequeños proyectos como este, si tienes alguna sugerencia o alguna mejor forma de hacer algo que hice en este proyecto te lo agradeceré infinitamente ☺️.

#### English

I will keep learning to put into practice on small projects like this one, if you have any suggestions or a better way to make this work please leave a comment or feedback, I will be more than thankful.

### Useful resources

- [Josh Comeau Courses](https://courses.joshwcomeau.com/)

## Author

- Website - [Jean Carlos Ruiz](https://www.jeancarlosruiz.com)
- Frontend Mentor - [@jeancarlosruiz](https://www.frontendmentor.io/profile/jeancarlosruiz)
