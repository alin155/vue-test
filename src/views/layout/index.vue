<template>
  <div class="wrapper">
        <header>
            <input type="text" autofocus placeholder="Enter a task..." id="item">
            <div id='animationDiv'><button id="add">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 16 16" style="enable-background:new 0 0 16 16;" xml:space="preserve"><g><path class="fill" d="M16,8c0,0.5-0.5,1-1,1H9v6c0,0.5-0.5,1-1,1s-1-0.5-1-1V9H1C0.5,9,0,8.5,0,8s0.5-1,1-1h6V1c0-0.5,0.5-1,1-1s1,0.5,1,1v6h6C15.5,7,16,7.5,16,8z"/></g></svg>
            </button></div>
        </header>
        <div class="container">
            <ul class="todo" id="todo">               
            </ul>
            <hr class = "divider">
            <ul class="todo" id="completed">           
            </ul>
        </div>
    </div>
</template>

<script>
import { Navbar, TodosList, RecordsList } from '@/views/layout/components'

export default {
  name: 'layout',
  components: {
    Navbar,
    TodosList,
    RecordsList
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "src/styles/mixin.scss";
.app-wrapper {
  @include clearfix;
  background: #a99a92;
  margin: 0px auto auto auto;
  border-radius: 20px;
  box-shadow: 0 6px 30px 18px rgba(199, 199, 199, 0.75);
  transition: transform 0.3s ease-in;
}
header {
  width: 100%;
  height: 80px;
  position: relative;
  top: 0;
  /* needed to keep on top */
  bottom: 0;
  padding: 15px;
  z-index: 5;
  background: #478df7;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  box-shadow: 0 2px 8px rgba(61, 105, 250, 0.5);
  input {
    font-family: Arial;
    width: 100%;
    font-size: 1rem;
    height: 50px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
    float: left;
    padding-right: 70px;
    box-sizing: border-box;
    background: rgba(255, 255, 255, 0.2);
    border: none;
    color: #fdfdfd;
    text-indent: 2%;
    outline: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    -o-appearance: none;
    appearance: none;
    transition: all 0.5s ease;
  }
  div#animationDiv {
    /*being used for mojs animation*/
    height: 50px;
    position: absolute;
    right: 15px;
    width: 50px;
  }
  button {
    width: 50px;
    height: 50px;
    position: absolute;
    /*top: 15px; optional, it is so by default and right not needed as applied on parent! :D */
    border: 0px;
    outline: 0px;
    border-color: transparent;
    outline-style: 0px;
    border-radius: 50%;
    background: white;
    cursor: pointer;
    z-index: 1;
    /*to ensure its on top of container*/
    box-shadow: -2px 2px 5px rgba(41, 10, 77, 0.5);
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    -o-appearance: none;
    appearance: none;
    transition: all 0.2s ease;
    &:hover {
      box-shadow: none;
      transform: scale(0.9);
    }
    &:active {
      background: rgba(191, 165, 223, 0.3);
      outline: none;
      outline-width: 0;
      outline-color: transparent;
    }
    svg {
      width: 40%;
      height: 40%;
      position: relative;
      top: 5%;
      fill: #b43f3f;
      z-index: 5;
    }
    &.rotate {
      transform: rotate(180deg);
      transition: all 0.3s ease;
    }
  }
}

div.container {
  width: 100%;
  float: left;
}

ul.todo {
  list-style: none;
  li {
    background: #fff;
    color: #b43f3f;
    padding: 15px;
    margin: 15px 15px 15px 15px;
    border-radius: 8px 0 8px 0;
    box-shadow: -2px 2px 4px rgba(41, 10, 77, 0.5);
    transition: all 0.2s ease-in;
    transition: opacity 0.3s ease-out;
    transition: opacity 0.2s ease-in;
    /* transition: height 0.3s ease-in; */
    max-height: 50px;
    opacity: 1;
    position: relative;
    /* so we can absolute the buttons*/
    &.deleted, &.invisible {
      opacity: 0;
    }
    &:hover {
      transform: scale(0.995);
      box-shadow: none;
      background: rgb(255, 241, 219);
      background: -moz-linear-gradient(left, rgb(255, 231, 194), rgb(255, 244, 228));
      background: -webkit-linear-gradient(left, rgb(255, 231, 194), rgb(255, 244, 228));
      background: -o-linear-gradient(left, rgb(255, 231, 194), rgb(255, 244, 228));
    }
    &:last-of-type {
      margin-bottom: 0;
    }
    .buttons {
      position: absolute;
      width: 100px;
      height: 50px;
      top: 0;
      right: -1%;
      button {
        width: 30px;
        height: 30px;
        margin: 10px 0 0 0;
        float: left;
        background: none;
        position: relative;
        border: 0px;
        outline: none;
        cursor: pointer;
        box-shadow: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        -ms-appearance: none;
        -o-appearance: none;
        appearance: none;
        &:last-of-type::before {
          content: ' ';
          width: 1px;
          height: 30px;
          background: #edf0f1;
          position: absolute;
          top: 0px;
          left: 0;
          z-index: -20;
        }
        svg {
          width: 22px;
          height: 22px;
          .fill {
            transition: all 0.3s ease-out;
          }
        }
        &.deleteButton svg .fill {
          fill: #C0CECB;
        }
        &.checkButton svg {
          .fill {
            fill: rgb(47, 167, 77);
          }
          .noFill {
            fill: none;
          }
        }
      }
    }
  }
  &:not(#completed) li .buttons button.checkButton:hover svg .noFill, &#completed li .buttons button.checkButton svg .noFill {
    fill: rgb(84, 201, 113);
  }
  &:not(#completed) li .buttons button.checkButton:hover svg .fill, &#completed li .buttons button.checkButton svg .fill {
    fill: #fff;
  }
  li .buttons button.deleteButton:hover svg .fill {
    fill: rgb(201, 41, 41);
  }
}

hr.divider {
  width: 50%;
  margin: 20px auto 5px auto;
}

#completed {
  opacity: 0.2;
}

#checkAnimateDiv {
  width: 1px;
  height: 1px;
  z-index: -10;
  position: relative;
  bottom: 12px;
  left: 15px;
}
</style>
