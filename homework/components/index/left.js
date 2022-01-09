import { Component } from "react";
import styles from '../../styles/index/left.module.scss'

class Left extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    componentDidMount(){
        console.log("this ran");
        const text = document.querySelector('#typing-text');

        // make a words array
        const words = [
        "Assignment.",
        "Homework.",
        "Notes."
        ];

        // start typing effect
        setTyper(text, words);

        function setTyper(element, words) {

        const LETTER_TYPE_DELAY = 75;
        const WORD_STAY_DELAY = 2000;

        const DIRECTION_FORWARDS = 0;
        const DIRECTION_BACKWARDS = 1;

        var direction = DIRECTION_FORWARDS;
        var wordIndex = 0;
        var letterIndex = 0;

        var wordTypeInterval;

        startTyping();

        function startTyping() {
            wordTypeInterval = setInterval(typeLetter, LETTER_TYPE_DELAY);
        }

        function typeLetter() {
            const word = words[wordIndex];

            if (direction == DIRECTION_FORWARDS) {
            letterIndex++;

            if (letterIndex == word.length) {
                direction = DIRECTION_BACKWARDS;
                clearInterval(wordTypeInterval);
                setTimeout(startTyping, WORD_STAY_DELAY);
            }

            } else if (direction == DIRECTION_BACKWARDS) {
            letterIndex--;

            if (letterIndex == 0) {
                nextWord();
            }
            }

            const textToType = word.substring(0, letterIndex);

            element.textContent = textToType;
        }

        function nextWord() {

            letterIndex = 0;
            direction = DIRECTION_FORWARDS;
            wordIndex++;

            if (wordIndex == words.length) {
            wordIndex = 0;
            }

        }
        }

    }

    render(){
        return (
            <div className={styles.container}>
                <h1 className={"title " + styles.heading}>Get your study material and <span id="typing-text" className={styles.span}>HomeWork</span><br /><span className={styles.span}>Sign Up</span> RIGHT NOW!!</h1>
                <br />
                <div id={styles.one} className={styles.subpoints}>
                <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" />
                <h1 className={"title " + styles.subheading}>Get homework of your school/college daily</h1>
                </div>
                <div className={styles.subpoints}>
                <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" />
                <h1 className={"title " + styles.subheading}>Get homework of your school/college daily</h1>
                </div>
                <div className={styles.subpoints}>
                <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" />
                <h1 className={"title " + styles.subheading}>Get homework of your school/college daily</h1>
                </div>
                {/* <h1 className={"title " + styles.heading}>Container Component some random text <span className={styles.span}>HomeWork</span><br /> Some More Random Text To Fill The empty space in the web page</h1> */}
                {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p> */}
            </div>
        )
    }
}

export default Left