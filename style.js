export const global_styles = `
<style>
  :host{
    --first-color: #1A73E8;
    --second-color: #E1586A;
  }
</style>`;

export const chat_styles = `
  <style>
  .chat__position {
    position: fixed;
    bottom: 0;
    right: 2rem;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    width: 350px;
  }

  .collapsible {
    background-color: var(--first-color);
    color: white;
    cursor: pointer;
    padding: 18px;
    width: 350px;
    text-align: left;
    outline: none;
    font-size: 18px;
    border-radius: 10px 10px 0px 0px;
    border: 3px solid white;
    border-bottom: none;
    justify-content: space-between;
  }

  .chat__content_toogle {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.2s ease-out;
  }

  .chat__content_toogle.active {
    max-height: 500px;
    scroll-behavior: smooth;
    overflow: auto;
    scrollbar-width: none;
  }

  .chat__content_body {
    background: white;
    text-align: center;
    min-height: 500px;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-content: end;
  }

  .chat-container::-webkit-scrollbar { display: none; }

  .chat__messages { width: 100%; }

  .chat__input_bar {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    background-color: rgb(235, 235, 235);
    padding: 10px 0px 10px 0px;
    position: sticky;
    bottom: 0;
  }

  .chat__icon {
    cursor: pointer;
    width: 30px;
    height: 30px;
  }

  .chat__icon:hover {
    opacity: .7;
  }

  .chat__input {
    border: none;
    box-sizing: border-box;
    border-radius: 10px;
    padding: 10px;
    font-size: 16px;
    color: #000;
    background-color: white;
    outline: none
  }


  @keyframes floatup {
    from {
      transform: translateY(14px);
      opacity: .0;
    }
    to {
      transform: translateY(0px);
      opacity: 1;
    }
  }

  @media screen and (max-width:600px) {
    .chat__content_body {
      width: 100%;
      border-radius: 0px;
    }
    .chat__position {
      position: fixed;
      bottom: 0;
      right: 0;
      width: 100%;
    }

    .collapsible {
      width: 100%;
      border: 0px;
      border-top: 3px solid white;
      border-radius: 0px;
    }
  }
  </style>
`;

export const message_styles = `
  <style>
  .userText {
    color: white;
    font-family: Helvetica;
    font-size: 16px;
    font-weight: normal;
    text-align: right;
    clear: both;
  }

  .userText span {
    line-height: 1.5em;
    display: inline-block;
    background: var(--first-color);
    padding: 10px;
    border-radius: 8px;
    border-bottom-right-radius: 2px;
    max-width: 80%;
    margin-right: 10px;
    animation: floatup .5s forwards
  }

  .botText {
    color: #000;
    font-family: Helvetica;
    font-weight: normal;
    font-size: 16px;
    text-align: left;
  }

  .botText span {
    line-height: 1.5em;
    display: inline-block;
    background: #e0e0e0;
    padding: 10px;
    border-radius: 8px;
    border-bottom-left-radius: 2px;
    max-width: 80%;
    margin-left: 10px;
    animation: floatup .5s forwards
  }

  .botOption span {
    border-radius: 50px;
    color: var(--second-color);
    line-height: 1.5;
    display: inline-block;
    padding: 10px;
    border: 3px solid #E1586A;
    background: none;
    margin: -10px 0px 0px 10px;
    animation: floatup .5s forwards;
    max-width: 85%;
    font-weight: 600;
    cursor: pointer;
    position: relative;
    -webkit-user-select: none; /* Safari */        
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+/Edge */
    user-select: none; /* Standard */
  } 

  .botOption span:hover {
    background: var(--second-color);
    color: #fff;
  }

  .botOption span:active {
    top: 1px;
    background: var(--second-color);
    color: #fff;
  }

  .timeResponse {
    text-align: left;
    padding: 0 0 0 20px;
    font-size: 14px;
    margin: 0;
    color: #858585;
  }

  .timeResponse.userTime {
    text-align: right;
    padding: 0 20px 0 0;
  }

  </style>
`;
