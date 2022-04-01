import styled from "styled-components";

export const Activity = styled.div`
background-color: var(--Dark-blue);
width: 100%;
height: 100%;
border-bottom-left-radius: 20px;
border-top-left-radius: 20px;
border-top-right-radius: 20px;
border-bottom-right-radius: 20px;
display: grid;
grid-template-rows: 45px 30px 45px 35px;
overflow: hidden;

.ellipsis:hover {
fill: white;
}
div {
  display: grid;
  grid-auto-flow: column;
  justify-items: center;
  align-items: center;
  overflow: hidden;
}
h3 {
  font-size: 40px;
  font-weight: 300;
  padding-left: 30px;
}

p {
  padding-top: 10px;
  padding-left: 30px;
  font-size: 13px
}

.activity-logo {
  height: 60px;
  justify-self: right;
}

.activity-work {
  background-color: var(--Lighter-red);
  border-color: var(--Lighter-red);
}

.activity-play {
  background-color: var(--Soft-blue);
}

.activity-study {
  background-color: var(--Light-red)
}

.activity-exercise {
  background-color: var(--Lime-green)
}

.activity-social {
  background-color: var(--Violet);
}

.activity-selfcare {
  background-color: var(--Soft-orange);
}
@media (max-width: 767px) {
  .values {
    display: flex;
    justify-content: space-between;
  }

  .values > p {
    padding-top: 25px;
  }
}

`;