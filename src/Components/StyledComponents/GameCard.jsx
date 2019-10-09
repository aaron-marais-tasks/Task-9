/*
  This file holds the styling for the game cards
*/

// Import styled component library
import styled, { keyframes, css } from 'styled-components'

// Keyframes are used for CSS animations
const CardKeyframes = keyframes`
  0% {
    transform: scale(1) rotateY(0deg);
  }

  50% {
    transform: scale(1.1) rotateY(90deg);
  }

  100% {
    transform: scale(1) rotateY(0deg);
  }
`

// Default card styling
/* Each card should have 8vw width, .5vw side margins, 10vw height, .5vw border radius, and light gray bg color */
const defaultStyling = css`
    width: 11vw;
    margin: 0 .5vw;
    height: 15vw;
    background-color: lightgray;
    border-radius: .5vw;
`

// Selected card styling
/* If card is selected, do a linear animation, with forward animation filling */
export const Selected = styled.div`
    ${defaultStyling};

    animation-fillmode: forwards;
    animation: ${CardKeyframes} 1s linear;

    ${props => `background-color: ${props.color}`}
`

export default styled.div`
    ${defaultStyling};
`
