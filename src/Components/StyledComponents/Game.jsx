/*
    This file holds my game box styling
*/

// Import styled component library
import styled from 'styled-components'

export const GameContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`

// Game box styling
/* A relative row flexbox, with 1vw top/bottom margin, 10vw height, and width
	calculated by 8vw (width of card) + 1vw (side margins), * 3 (3 cards) */
export default styled.div`
      display: flex;
      flex-direction: row;
      position: relative;
      width: calc((11vw + .5vw * 2) * 3);
      height: 15vw;
`
