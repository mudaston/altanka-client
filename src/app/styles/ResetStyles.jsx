const ResetStyles = () => {
  return (
    <style>
      {`
            fieldset,
            legend {
              border: 0;
              padding: 0;
            }
            a,
            abbr,
            acronym,
            address,
            applet,
            article,
            aside,
            audio,
            b,
            big,
            blockquote,
            body,
            canvas,
            caption,
            center,
            cite,
            code,
            dd,
            del,
            details,
            dfn,
            div,
            dl,
            dt,
            em,
            embed,
            fieldset,
            figcaption,
            figure,
            footer,
            form,
            h1,
            h2,
            h3,
            h4,
            h5,
            h6,
            header,
            hgroup,
            html,
            i,
            iframe,
            img,
            ins,
            kbd,
            label,
            legend,
            li,
            mark,
            menu,
            nav,
            object,
            ol,
            output,
            p,
            pre,
            q,
            ruby,
            s,
            samp,
            section,
            small,
            span,
            strike,
            strong,
            sub,
            summary,
            sup,
            table,
            tbody,
            td,
            tfoot,
            th,
            thead,
            time,
            tr,
            tt,
            u,
            ul,
            var,
            video {
              margin: 0;
              padding: 0;
              border: 0;
              font-size: 100%;
              font: inherit;
              vertical-align: baseline;
            }
            :focus,
            a:active,
            a:hover {
              outline: 0;
            }
            article,
            aside,
            details,
            figcaption,
            figure,
            footer,
            header,
            hgroup,
            menu,
            nav,
            section {
              display: block;
            }
            body {
              line-height: 1;
            }
            ol,
            ul {
              list-style: none;
            }
            blockquote,
            q {
              quotes: none;
            }
            blockquote:after,
            blockquote:before,
            q:after,
            q:before {
              content: '';
              content: none;
            }
            input[type='search']::-webkit-search-cancel-button,
            input[type='search']::-webkit-search-decoration,
            input[type='search']::-webkit-search-results-button,
            input[type='search']::-webkit-search-results-decoration {
              -webkit-appearance: none;
              -moz-appearance: none;
            }
            input[type='search'] {
              -webkit-appearance: none;
              -moz-appearance: none;
              -webkit-box-sizing: content-box;
              -moz-box-sizing: content-box;
              box-sizing: content-box;
            }
            audio,
            canvas,
            video {
              display: inline-block;
              max-width: 100%;
            }
            audio:not([controls]) {
              display: none;
              height: 0;
            }
            [hidden] {
              display: none;
            }
            html {
              font-size: 100%;
              -webkit-text-size-adjust: 100%;
              -ms-text-size-adjust: 100%;
            }
            a:focus {
              outline: dotted thin;
            }
            img {
              border: 0;
              -ms-interpolation-mode: bicubic;
              vertical-align: middle;
            }
            figure,
            form {
              margin: 0;
            }
            legend {
              white-space: normal;
            }
            button,
            input,
            select,
            textarea {
              font-size: 100%;
              margin: 0;
              vertical-align: baseline;
            }
            button,
            input {
              line-height: normal;
            }
            button,
            select {
              text-transform: none;
            }
            button,
            html input[type='button'],
            input[type='reset'],
            input[type='submit'] {
              -webkit-appearance: button;
              cursor: pointer;
            }
            button[disabled],
            html input[disabled] {
              cursor: default;
            }
            input[type='checkbox'],
            input[type='radio'] {
              box-sizing: border-box;
              padding: 0;
            }
            input[type='search'] {
              -webkit-appearance: textfield;
              -moz-box-sizing: content-box;
              -webkit-box-sizing: content-box;
              box-sizing: content-box;
            }
            input[type='search']::-webkit-search-cancel-button,
            input[type='search']::-webkit-search-decoration {
              -webkit-appearance: none;
            }
            button::-moz-focus-inner,
            input::-moz-focus-inner {
              border: 0;
              padding: 0;
            }
            textarea {
              resize: vertical;
              overflow: auto;
              vertical-align: top;
              resize: vertical;
            }
            table {
              border-collapse: collapse;
              border-spacing: 0;
            }
            button,
            html,
            input,
            select,
            textarea {
              color: #222;
            }
            ::-moz-selection {
              background: #b3d4fc;
              text-shadow: none;
            }
            ::selection {
              background: #b3d4fc;
              text-shadow: none;
            }
            fieldset {
              margin: 0;
            }
            .chromeframe {
              margin: 0.2em 0;
              background: #ccc;
              color: #000;
              padding: 0.2em 0;
            }
          `}
    </style>
  )
}

export { ResetStyles }
