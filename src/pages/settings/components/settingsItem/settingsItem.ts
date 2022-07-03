import { Input, InputProps } from '../../../../components/input';
import styles from './settingsItem.module.css';

export default class SettingsItem extends Input {
  public static componentName = 'SettingsItem';

  constructor(props: InputProps) {
    super({ ...props });

    this.setProps({ invalidClassName: styles.invalid });
  }

  protected render(): string {
    return `
    <div class="${styles.settingsItem}">
      <div class="${styles.settingsItem__inputGroup}">
        <label class="${styles.settingsItem__title}">
          {{ title }}
        </label>
  
        <input class="${styles.settingsItem__input}"
        {{#if type}}
        type="{{ type }}"
        {{else}}
        type="text"
        {{/if}}
  
        {{#if name}}
        name="{{name}}"
        {{/if}}
  
        {{#if id}}
        id="{{id}}"
        {{/if}}
  
        {{#if value}}
        value="{{value}}"
        {{/if}}
  
        {{#if placeholder}}
        placeholder="{{placeholder}}"
        {{/if}}
        >
      </div>
  
      <!-- Error  -->
      <span class="${styles.settingsItem__error}">{{ rules }}</span>
    </div>  
    `;
  }
}
