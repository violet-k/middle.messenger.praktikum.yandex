import { Block } from '../../../../core';
import { IProps } from '../../../../core/Block';
import styles from './message.module.css';

interface MessageProps extends IProps {
  author?: number,
  text?: string,
  time?: string,
}

export default class Message extends Block<IProps> {
  public static componentName = 'Message';

  constructor(props: MessageProps) {
    super({ ...props });
  }

  protected render(): string {
    let buffHtml = `
      <div class="${styles.message}`;
    buffHtml += (this.props.author) ? ` ${styles['left-align']}` : '';
    buffHtml += `">
      <div class="${styles.message__container}">
        <span class="${styles.message__text}">
          {{ text }}
        </span>
        <time class="${styles.message__time}">
          {{ time }}
        </time>
      </div>
    </div>
    `;
    return buffHtml;
  }
}
