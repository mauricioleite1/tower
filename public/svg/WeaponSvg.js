import React from 'react';

const verifyIcon = (type, color) => {
  switch (type) {
    case 'Hand Cannon':
      return (
        <svg viewBox="-25 0 90 32">
          <path fill={color} d="M57.76 8.704h-2.72V9.76h1.184l.32.32v3.52l-.768.256-23.2 1.088-1.12-1.088h-.896L28.8 15.68h-.416v.352l-3.168 3.104-1.376 1.152-1.12.512-1.696.448-1.536.096-1.184-.128-1.12-.352-1.056-.576-.864-.192-.864.064-.512.16-.352.448-.224.864v.864l-.704.544-.384.64-.832 3.328.352 1.664.608.448v.416l-.64.16-7.808-2.272-.096-.736.096-1.472.288-1.792.768-2.432.96-2.176 1.248-1.92 1.728-1.952.64-.8.192-.608v-.8L9.312 12l-.8-.832-1.184-.672.736-.736h1.664l.384-.416 1.728-.416.48-.544.512-.672.384-.928.192-1.024.512-.64h.48l.192-1.312.096-.928h9.408l1.248 1.28h25.184l.64-.64h5.6l.992 1.024v4.16zM24.896 17.76v-1.056l-.224-.768-.48-.48-.64-.224-1.664-.064h-2.272l-.64.864-.128.704.064.512.224.384.32.384-.288.256-.48-.448-.416-.704-.288-1.024-.128-.544-.288.032-.608.544-.48.704-.192.96v.992l.448.896.768.608 1.312.384h1.088l1.28-.128 1.28-.352.864-.448.8-.608.512-.608z">
          </path>
        </svg>
      );
    case 'Shotgun':
      return (
        <svg viewBox="0 0 100 32">
          <path fill={color} d="M94.272 4.384h.608V7.2h-.512v2.848h-.416V13.6h-.416v1.152h-3.648l-.32.352h-3.904l-.16.832-.192.416-.352.16h-.64l-.64-.128H63.296l-.736-.128-.128-.384.288-.416.416-.64H41.248l-.192.48-.064.512.064.48.064.416.224.416-.256.256-.512-.48-.384-.768-.224-.8-.032-.608h-.928l-.192.576-.192.672-.096.672.032.512.448.384.512.256.16.256-.032.352-.224.352-.48.16-.736.128-.352.192-.288.288-.32.608-.096.48v.576l-.192.512-.256.448-.416.544-1.472 3.648.48.512v.448l-.576.608h-4.8l-.832-.224-.032-.736.128-.288-.224-.864.256-1.952.704-2.208.896-1.888 1.056-1.568.672-.672.416-.48.224-.672-.064-.512-.384-.672-.64-.48-.64-.256-.896-.16h-4.64l-.32-.16-.928-.864v-.352h-.256l-.32.16-.608.256-16.512 3.68-.352.256-1.888.448-.384-.096-.128-.384-.096-1.152.288-2.976.096-2.976-.128-3.168L4.32 5.28l.096-.608.256-.352.384-.16 1.376-.064h.8l.384.416L8 4.096h12.032l.832.096.928.288 1.024.416.736.48.544.288.32.352.224-.256h2.688l.192-.096.256-.16 2.208-1.888.928-.256h.704l.544-.576h11.136l.32.32.736.768h10.592l.416-.416h20.736l.512.544h5.024l.576-.608h9.92v-.608h.96v1.024h.64z">
          </path>
        </svg>
      );
    case 'Auto Rifle':
      return (
        <svg viewBox="0 0 89 32">
          <path fill={color} d="M78.624 8.704h5.632v2.912h-5.632v.544h-10.4v-.544h-.704v1.28l-.384.416h-.64v1.184h1.536v-.448h4.256v2.016h-4.256v-.352h-1.568v.384l-.864.832h-2.496l-1.088.416H47.168l-1.312-.416h-.32v8.512l-.48.416h-8.928l-.576-.576v-2.016l-.864.864v.672l-.416.768-1.28-.416-.48.416-12.224-3.2-.384-.384.96-.544.032-.864.288-1.376.512-1.216 1.152-1.76.96-1.088.448-.352-.128-.32v-.832l-1.824-.832H11.936l-4.8 2.784-.192 1.344-.256.32-2.176.576-.416-.128.224-2.368.128-3.744L4.32 8.64l-.128-1.856.032-.704.224-.352h1.248l.192.192h.864l.32.352v.672H21.92l.288.32 2.464-.608.544-.512.672-.448.608-.128.096.096v.448h.992V4.736l.768-.512h.256V3.072h.672v1.152h.608l1.696.992v.896h6.368l2.112.8h8.448v-.736l.256-.288h5.024l2.144 1.088h4.768l1.024-.96h4.384l.16.16v1.44h1.024l.224.224v.832h.704v-.544h10.4v.576zm-47.36 13.728l2.784-6.976-.096-.512-.256-.352-.544-.128h-3.84l-.128.704.16.96.256.416-.16.224-.224-.16-.352-.544-.256-.768-.096-.832h-.128l-.352.288-.256.576.064.736.32.544.448.448-.16.416h-.672l-.512.16-.416.48-.192.672-.192.704-.448.544-.512.768-.384.928.096.224L29.76 23.2l.608-.096.48-.224z">
          </path>
        </svg>
      );
    case 'Pulse Rifle':
      return (
        <svg data-v-43c2eed1="" viewBox="0 0 87 32">
          <path fill={color} d="M82.528 9.728l.256.288v2.656l-.416.416h-13.92l.512.512h1.28v1.6l-.128.704-.416.736-.576.448-.672.288H45.632l-1.376.352-1.12.704-1.024.8-.448.576-2.304 6.432-.512.992-.672.608-.992.608-1.152.128-1.344-.128-9.92-2.784-.416-.16-.16-.48 1.088-.448.32-1.824.704-1.792 1.12-1.952 1.408-1.664.736-.768.192-.64-.128-.672-.416-.576-1.056-.512-1.248-.16-3.2-.096v.672l-.672.352.96 9.664-.352.576-2.144.256-.448-.32-.448.064-.32.384-3.648.352-.224-.256-.608.064-.192.288-1.76.192-.384-.256-.64-3.968-.608-.032-.128-1.152h-.32l-.544-.704H7.52v.224l-3.264.96-.48-.48.32-4 .064-3.584-.096-4-.096-3.04.192-.832.192-.16h1.536l.224.224h1.376l.384.736h21.696l1.984-.928h-.864l-.416-.384L31.744 1.6l.48-.32h7.136l.608.256.448.512.128.768V4l.384.352v.352l-.736.736h-.832v.704h5.152l1.696.448 22.304.96.416.32v.992l-.64.64.224.224h14.016zm-41.248 7.52v-.384l-.128-.448-.32-.256H36.16l-.16.736.192.928.352.576-.288.352-.448-.384-.352-.672-.256-.8-.128-.736-.288.096-.32.32-.32.672.064.672.352.672.736.48-.128.576-.448-.032-.704.064-.48.192-.512.608-.256.896-.16 1.088-.352.16-.448.48-.352.544-.608 1.696 4.16 1.6.896.256h.928l.672-.288.48-.48 3.168-8.704zm23.808-3.904v-.896H51.36v.896h13.728z">
          </path>
        </svg>
      );
    case 'Scout Rifle':
      return (
        <svg viewBox="0 0 99 32">
          <path fill={color} d="M89.184 9.696h5.408v3.072h-5.344v-.416h-1.024v.416h-1.12v-.448H70.752v1.792h.768l.352.352v.448l-.352.352h-.928l-.768.384-1.536.128-.32.224h-20.32l-1.216.096-1.184.544-1.088.8-.352.384-3.744 8.16-.64.672-.8.544-1.12.448-1.376.064-1.184-.128-1.696-.384-5.952-1.76-.672-.064-.928.064v1.472h-.768v-1.536h-.512v.832l-.256.32h-2.016l-.256-.256-.224.224h-4.832l-.256.288h-1.12l-.288-.32h-1.024v-6.528l-.672.64q-.384-.416-.448-.416v-1.312H7.68v1.856l-.224.352-.448.32-2.624.64-.288-.16v-2.72l.192-3.488.032-2.912-.064-2.912-.16-1.632.256-.928.48-.16h.992l.288.288h1.312l.352.48L14.08 5.12h18.464v-.544h2.144l.64-.64h3.52l.32-.576.128-.544V2.24l.16-.224h1.12l.256.224v.48l.096.544.864 1.248h2.88l.192-.224h.224l.832.832h1.792l.384-.384h6.88l.512.544h14.176l.928.352v1.056h1.216l.512.544v.32l-.48.512h-.832v.832l-.32.32v.832h16.384v-.352h1.184v.544h.928v-.544zm-58.016 6.368v-.8l-.224-.384-.416-.384-.64-.224h-1.632l-.512.096-.352.352-.224.576-.128.832.224.8.48.672.672.416h.896l.832-.32.8-.832zm11.904.288l.224-.48-.16-.448-.384-.32-.512-.224h-4.192l-.192.768-.064.576.096.48.192.48.224.256-.192.288-.32-.32-.416-.704-.256-.96-.096-.864h-.32l-.768.736v1.376l.192.448.288.256.288.224-.16.736-.96.128-.576.32-.448.64-.224.672-.096.768-.16.384-.48.448-.416.64-.384.864-.448 1.152-.064.192.096.192 2.304.704 1.632.448h.96l.736-.32.832-.64.416-.8 3.36-7.2z">
          </path>
        </svg>
      );
    case 'Fusion Rifle':
      return (
        <svg fill={color} viewBox="0 0 72 32">
          <path d="M66.944 3.936h.608v5.792l-.448.448v2.4h-.768l-.576.608H52.192l-.576-.64h-1.184l-9.76 7.328v8.864l-.48.512h-8.128l-.416-.448v-3.36l-13.504-3.904-.512-.32-.224-.32v-.48l.64-.192.448-.256.192-1.312.416-1.408.832-1.792 1.024-1.632.992-1.344.256-.32.032-.192-.16-.224H9.408l-2.144 2.272-.128.288v2.368l-.448.992-2.144.768-.256-.16-.16-.736v-.512l.16-2.688.096-2.88-.096-2.88-.16-1.984.096-.672.256-.192.416-.096h.576l.416.384h.704l.352-.352h20.704l1.952-.48.928-.704.512-.768.256-.48h1.856v-.416h1.312l.448-.736 3.232-.16.48-.544.224-1.152h1.088l.16 1.12.672.832v.448h3.68v.48h21.088zM31.648 22.368v-9.696h-3.712l-.128.32-.032.576.128.704.288.64-.288.288-.192-.192-.224-.288-.32-.672-.128-.64-.032-.736h-.576l-.224.288-.16.576.064.736.288.448.608.384v.288l-.384.416-.352-.032-.512.064-.352.224-.288.448-.224.8v.864l-.384.192-.512.544-.416.736-.256.96 8.064 2.336v-.288zm2.016-12.736V6.208h-.64v3.424h.64z">
          </path>
        </svg>
      );
    case 'Grenade Launcher':
      return (
        <svg fill={color} viewBox="0 0 84 32">
          <path d="M79.04 7.04h.736v3.776H79.2l-.448.736H70.72l.352.352v1.28l-.288.32h-1.728l-.928.288-.768.672-.768 1.44-3.488 7.776-.672.832-.928.576-1.056.352-1.664.16H29.408l-2.048-.352-19.424-5.344-.48-.512-.384.864-.448.256-1.152.128-.768.032-.224-.32-.224-.8.128-3.328.128-3.648-.256-4.16-.128-2.144.128-1.216.448-.672.48-.192h1.824l.416.416.16.608 1.28-.864 16.928-.576 1.344-.48.48-.672h1.088v.672h1.152l.672-1.184.416-.32h3.968l.256.192 1.184.992h4.544l.928.928h4.96v-.928h1.12v1.12h6.752l.544.544h20.288v-.48h2.336L79.36 5.6v1.12zm-51.424 8.544l.192-1.088-.192-.8-.448-.544-.384-.224-2.24-.256-1.056.128-.576.128-.352.448-.192 1.12.224.928.64.768 1.12.48h1.472l1.056-.288zm25.536-7.552V7.68H37.12v.352h15.328v13.504H37.12v-7.712l.192-.416h-2.208l-.352.448-.16.736.128.736.192.64.352.544-.224.288-.448-.384-.576-.928-.416-1.408-.064-.576-.352.416-.256.576-.128.608v.448l.224.32.256.288.224.416-.128.704h-.704l-.48.512-.384.544-.128.416v.416l-.128.288-.384.224-.416.8-.32.704-.128.864v.416l.256.192h6.912v-.032h15.68V8.032zm9.504 6.56l.192-.8-.096-.608-.352-.256-.608-.128h-3.904l-.48.16-.32.448-.096.704v6.304l.096.48.288.448.672.128.704-.064.544-.384.448-.736z">
          </path>
        </svg>
      );
    case 'Sniper':
      return (
        <svg fill={color} viewBox="0 0 123 32">
          <path fill={color} d="M113.312 11.392h5.92v3.328h-5.888v.992H95.136v-.576h-1.664v-.928h-17.12v.512h-5.248v-.352l-1.344.512v1.216h1.344v-.448h3.84v2.048H71.2v-.384h-1.376l-.064.992-.224.288-.384.128H45.824l-.288-.32h-4.32v6.56l-.352.384h-6.528l-.256-.256h-.928l-.16-.192v-4.32l-1.472-1.024-.192-.288v-2.912h-1.216l-.16.448-.096.64.064.8.192.64.096.224-.256.16-.352-.48-.416-.96-.16-.992-.032-.48h-.256l-.352.448-.224.544-.096.576v.544l.16.48.416.352.256.128-.16.576-.672.064-.48.224-.288.416-.224.48-.096.48v.288l-.096.48-.448.384-.256.544-.288.928-.448 1.248.16.512-.448.384-17.984-3.68-.128.288-.32.256L4.736 24l-.32-.064-.16-.256-.128-.448.064-.8.192-3.104.128-3.232-.064-3.68-.16-1.76.096-.896.128-.288.608-.096h.832l.256.256h.864l.224.32.096.352v.544h15.104l.896-.992H25.6v-.96l.256-.256h.768l.16-.16h2.784l.48-.352h3.52V7.104H25.6V6.56h-2.592l-.096-.064 2.816-3.616h2.112l.8-.48h21.376l.448.704v2.144l2.624 1.248V7.2h-2.464l-1.536 1.664h1.92l1.728.96h14.848v1.472h2.112v.576h1.248v-.544h5.408v.544H93.44v-.8h1.856v-.576h18.016v.896zM24.64 16.928v-.608h-9.984l4.736 4.832.864.64.576.288h.544l.448-.128.288-.288v-.608zm21.984-8.096V7.2h-6.976v1.024l.064.032h1.632l1.184.576h4.096z">
          </path>
        </svg>
      );
    case 'Sidearm':
      return (
        <svg fill={color} viewBox="0 0 44 32">
          <path d="M7.776 7.744l-.512-.512v-4l.48-.48h2.496l.64-.64h1.536l.64.64h2.88l.288.256h1.056l.32-.32h17.536v-.352h1.024l.416.416h1.472l.32.32V4.16h.672v2.432h-.704v.672l-.288.288.256.256v1.984h-7.936l-.608.992h-8.224l-.256.8-.096.96.032 1.088.192 1.12.064.32-.544.192-.448-1.024-.352-1.568-.096-1.44-.032-.448-.48.064-.544.736-.352.8-.128.992-.064 1.056.32.96.8.832.608.384-.192.448-1.28.288-.864.416-.768.8-.48.896-.16 1.248-.576.352-.576.8-.512 1.184-.512 1.504-.416 1.44-.032.992.032.672-.32.128h-.8L5.28 25.888l-1.152-.608.064-.864 1.696-.096.096-1.728.48-2.24 1.056-2.496 1.664-2.464.992-1.376.832-1.568-.096-.64-.992-.96-.864-.544-.352-.096H6.72l-.384-.352.736-1.44.96-.352z">
          </path>
        </svg>
      );
    case 'SMG':
      return (
        <svg fill={color} viewBox="0 0 69 32">
          <path d="M63.84 6.144l.352.192v3.072l-.256.288h-9.984v.576l-.288.352h-5.792v.608h5.248l.192.32v.736l-.128.256h-1.856l.416.608.032.32-.064.192-.16.096-.48.032H44.8l-.32-.32h-.32l-.416.384-.48.896-1.056 2.336L40 22.528l-.416.608-.544.288-.704.256-.896.16-1.024.096h-5.472v6.016l-.448.448h-1.984l-.192-.224h-.736l-.256-.256v-6.016l-.832-.192-.576-1.184-.352-1.216-.16-2.048.16-2.176.352-1.44.64-1.248.32-1.088.032-.928-.224-.416-2.144-.288-.64-.512h-5.696l-.512.128-2.08.192h-.768l-.288-.288-.608.128-.64.576-4.448 5.952-.512.384-.704.32-.768.16h-.448l-.192.544-1.44.48-.384-.16-.128-.384v-.64l.096-3.232.032-4.128-.128-4.224V5.312l.256-.704.384-.32h1.44l.384.736h.512l.416.416h.384l.16-.16h19.2V4.128l.192-.512h.224V3.04h.416l.736.896.288.992.224.032v.32h.288v-.384l.352-.384h7.232V4h-1.152l-.288-.16h-.8V1.024l.416-.416h.704l.48-.384h.416v.32h6.112l.16.128v.384h.416v2.592l-.192.192h-.512v.224h-.384v.544h2.688v.384h6.048l.416.384h1.6l.416.352v.416h9.92zm-23.52 7.008V12.8l-.224-.192-.352-.128h-6.272l-.192.48-.064.544.032.512.128.416.256.352-.16.288-.448-.448-.416-.832-.16-.832v-.48h-.672l-.256.096-.16.352-.16.448-.096.736v.608l.224.416.448.32-.032.352-.544.288v5.184l.096.224.256.256.448.096h4.032l.544-.16.448-.384.416-.704 2.752-6.944z">
          </path>
        </svg>
      );
    case 'Bow':
      return (
        <svg fill={color} viewBox="0 0 3198 1024">
          <path d="M3065.856 955.392l-8.192 3.072q-55.296-63.488-172.032-169.984H1819.648v40.96q0 6.144-5.12 8.192-20.48 0-22.528-6.144l-9.216-43.008h-496.64l-10.24 43.008q-2.048 6.144-22.528 6.144-4.096-1.024-4.096-8.192v-40.96H283.648q-96.256 83.968-142.336 163.84-3.072 5.12-6.144 2.048-4.096-1.024-4.096-8.192v-2.048l1.024-2.048q19.456-109.568 40.96-165.888 36.864-99.328 61.44-106.496 1.024 0 6.656 5.632t11.264 12.288 6.656 7.68q21.504 36.864 55.296 8.192l28.672-23.552q11.264-8.192 67.072-54.784t104.96-84.992 139.264-96.256T839.68 337.92q248.832-126.976 698.368-220.16h2.048l2.048-223.232 8.192-19.456q2.048-3.072 3.072-3.072t27.136 139.264 26.112 142.336v4.096h-12.288q-25.6 6.144-27.648 10.24-7.168 17.408-7.168 52.224v176.128l-21.504 5.12V389.12l-1.024-3.072q-3.072-8.192-7.168-8.192-5.12 0-11.264 21.504v2.048h-8.192v-77.824h-7.168l-5.12-1.024q-60.416 1.024-120.32 6.656t-111.104 13.312-99.84 17.408-88.064 20.48-74.24 20.992-60.928 19.968-45.056 16.896-28.16 11.264l-10.24 4.096q-6.144 0-84.48 34.304T566.272 594.944 336.896 744.448h912.384v-6.144q0-9.216 5.12-9.216h30.72q6.144 0 6.144 9.216v6.144h486.4v-6.144q0-9.216 5.12-9.216h30.72q6.144 0 6.144 9.216v6.144H2836.48q-60.416-48.128-95.232-73.728-134.144-88.064-267.264-151.552Q2169.856 382.976 1792 361.472q-14.336-1.024-26.112 12.288t-16.896 34.816q-14.336 63.488-14.336 205.824 0 11.264-16.384 27.648l-4.096 5.12-6.144 8.192V131.072h4.096q290.816 39.936 496.128 122.88t440.832 260.096q115.712 83.968 241.664 209.92 10.24 11.264 22.016 10.752t29.184-19.968q3.072-3.072 9.216-10.24t10.24-10.752 5.12-3.584q4.096 0 11.776 9.216t21.504 37.376 29.184 70.144q21.504 62.464 30.72 109.568 5.12 23.552 6.144 38.912zM1577.984 395.264V238.592q0-28.672 5.12-38.912 1.024-3.072 9.728-4.608t11.776-.512h1.024v2.048q8.192 45.056 14.336 54.272 20.48 23.552 66.56 32.768h1.024v171.008l-3.072-13.312q-1.024-4.096-3.584-13.312t-4.608-13.312q-25.6-58.368-48.128-66.56-16.384-5.12-30.72 18.432-4.096 9.216-9.216 26.624v2.048h-10.24z">
          </path>
        </svg>
      );
    case 'Trace Rifle':
      return (
        <svg fill={color} viewBox="0 0 79 32">
          <path d="M59.776 13.824q.544 0 .944.4t.4.976q0 .544-.4.944t-.944.4H4.096v-2.72h55.68zm7.968 1.408l6.24 4.448-7.648-.064 2.4 7.264-6.144-4.544-2.304 7.296-2.304-7.296-6.176 4.544 2.432-7.264.256-.768h5.376q1.504 0 2.576-1.072T63.52 15.2t-1.072-2.576-2.576-1.072h-5.376l-.256-.704-2.432-7.296 6.176 4.576L60.288.8l2.304 7.328 6.144-4.576-2.4 7.296 7.648-.064zm-26.976 4.384v-.768h13.728v.768H40.768zm8.192-8.064v-.768h5.536v.768H48.96zm-14.656 0v-.768h10.208v.768H34.304zm-7.456 0v-.768h2.56v.768h-2.56zm-7.328 0v-.768h1.056v.768H19.52zm-5.92 0v-.768h1.056v.768H13.6zm17.76 8.064v-.768h4.096v.768H31.36zm-8.608 0v-.768h.928v.768h-.928z">
          </path>
        </svg>
      );
    case 'Sword':
      return (
        <svg fill={color} viewBox="0 0 120 32">
          <path d="M80.832 10.368h35.328l-14.944 11.68H43.488l-1.632-2.24-1.248-1.056-1.568-.704-1.44-.256-.96-.128-.608.352-2.336.448-1.472-.768-1.088.224-.576 8.928h-.8l-3.008-9.088-1.92-1.248H8.8l-.48.32-.48.416-.288.416h-2.88l-.736-.864v-5.152l1.44-.736h2.432l.992 1.28h15.84l3.52-1.76h14.752l.448-.672h4.672l1.568 1.76h29.568zM61.76 19.2v-1.248h-9.28V19.2h9.28zm3.296 0h33.376l-1.024-1.248H65.056V19.2zm34.784-1.728l4-2.976v-.672h-4.032v2.048l-.704.64z">
          </path>
        </svg>
      );
    case 'Rocket Launcher':
      return (
        <svg fill={color} viewBox="0 0 91 32">
          <path d="M85.28 6.72l1.216 1.408v7.424l-1.184 1.344h-2.304l-3.168 2.208h-1.184v.64H77.6l-.256-.288-.8.896h-3.936v1.184l.96 1.088h.544l4.864 5.632v.544l.736.832-1.312 1.536-.96-1.088h-.416l-4.896-5.664v-.352l-.928-1.088h-1.088l-.832-.352v-.384h-.8V20.8h.768v-.32h.416v-.288h-2.592l-.992 1.632h-3.072v-1.408h-.544l-.224.832-.416 1.152-.768.896L60 23.84l-1.6.128-.32-1.28h-1.536l-2.4 3.936v1.6h-5.6l-10.56-6.816v-3.456l-.48-.576h-1.856l-.512.608h-1.44v-.768l-3.584-1.344h-.896l-.736-.992H11.488v1.024l-2.112 3.712H6.144l-.384-.448v-2.4H4.64l-.512-.64V8.032l.608-.704h5.632l1.472 1.344 2.496.032.448.32L28.32 8.96l5.792-.608V7.168l-.736-.576-3.84-.64-.704-.288V5.28l5.504-.096h3.296l8.864 2.208v.832l.288.128v-.896l.384-.352h1.6V5.856l-.352-.416h-1.792v-.576h.416v-.608h-.416v-.448h.768l1.12-1.28h5.632l.32.352 1.728-1.792.544-.416.672-.16H70.56l.192.32.736 2.72h3.616v1.824h-3.776l-1.792 2.048.416.512.864-.992h1.728l.448.512h7.424l.64-.736h4.224zm-74.528 9.12v-.416l-.832 1.28-3.392.064v1.856l.16.192h2.208zm43.296 5.92v-1.248l-.064-.416-.224-.352-.192-.16-.192-.096h-2.4l-.384.224-.256.384-.192.48v3.456h1.952zm1.824-18.368l2.304.032-.96-1.152h-.352zm4.832 17.632v-.448L60.64 20h-2.304v1.088l.128.512.16.16h1.216l.416-.128.288-.256zm6.88-17.632l1.344-1.824-10.72-.032-.256.32 1.312 1.536h8.32z">
          </path>
        </svg>
      );
    case 'Machine Gun':
      return (
        <svg fill={color} viewBox="0 0 3075 1024">
          <path d="M122.88 684.032l1.024-28.672h7.168l-5.12-212.992-2.048-2.048 2.048-28.672 5.12-4.096q3.072-118.784 6.144-119.808l9.216-8.192q4.096-4.096 59.392-5.12l1.024-7.168h29.696v9.216h13.312l7.168 8.192h16.384l10.24-12.288 56.32-3.072v-14.336h297.984v17.408l17.408 12.288 59.392 2.048-20.48 32.768h14.336l31.744-50.176h32.768l15.36-22.528h25.6v-3.072h-8.192v-12.288h8.192l2.048-7.168h7.168v-6.144h3.072l2.048 1.024h21.504l2.048-1.024h4.096v18.432h13.312l318.464-72.704h39.936l10.24-3.072h13.312l13.312-12.288h66.56l4.096-4.096 6.144-3.072v-3.072h-50.176v-26.624l29.696-16.384h100.352l8.192 4.096v34.816h-14.336v12.288l11.264 5.12h14.336l11.264 5.12h9.216l2.048 7.168h290.816l483.328 108.544 90.112 21.504h68.608l3.072-5.12v-4.096h39.936l158.72-3.072v-47.104l24.576-24.576v-61.44l6.144-4.096h27.648V281.6h154.624l5.12 7.168h98.304l5.12 12.288h25.6q1.024 1.024 1.024 4.096v47.104q0 2.048-1.024 4.096-2.048 3.072-94.208 3.072l-12.288 28.672-1.024 14.336 1.024 1.024h17.408l5.12 13.312 5.12-2.048h22.528v56.32l-2.048 2.048h-20.48l-3.072-2.048-2.048 2.048-5.12 7.168h-17.408l-1.024-7.168h-7.168l-5.12 2.048h-64.512v4.096h19.456l18.432 20.48v16.384h-37.888l-2.048 4.096h-30.72l-128-39.936h-288.768l-12.288-12.288h-58.368l-6.144-2.048H2022.4l-5.12 7.168h-253.952l19.456 43.008h41.984l12.288 16.384q0 3.072 39.936 3.072h40.96l19.456 9.216 1.024 20.48 78.848-2.048v-5.12h22.528v113.664h-22.528v-5.12l-64.512 4.096v-5.12h-7.168v5.12h-8.192v7.168l-19.456 8.192h-73.728l-9.216-6.144h-218.112l-9.216 6.144h-21.504l-13.312-8.192v-7.168h-1.024l-4.096-11.264-3.072-83.968 4.096-10.24h8.192v-20.48l9.216-9.216 14.336-3.072v-16.384l4.096-3.072h45.056v-2.048q0-3.072-2.048-5.12-3.072 0-3.072-1.024h-44.032l-7.168-10.24-2.048-14.336h-4.096l-1.024 27.648H1408v24.576h28.672v12.288h12.288v267.264l-3.072 2.048h-9.216v7.168h-25.6v-15.36h-203.776l-2.048 3.072v12.288h-25.6v-7.168h-13.312V544.768h13.312v-14.336h25.6v-22.528h-17.408l-32.768-5.12-45.056-3.072 2.048 103.424q-4.096 16.384-12.288 28.672-4.096 6.144-17.408 19.456-11.264 11.264-75.776 6.144-8.192 0-16.384-2.048l-22.528-9.216-8.192-2.048H936.96l-84.992 142.336v1.024q0 2.048 2.048 4.096l22.528 29.696v17.408h-138.24l-5.12-4.096h-34.816l-139.264-55.296v-7.168l-46.08-20.48H253.952l-2.048 6.144-50.176 3.072-5.12-3.072v-6.144l-14.336 9.216q-41.984-3.072-44.032-4.096-4.096-1.024-4.096-6.144 0-3.072-3.072-59.392L128 686.08zm1904.64-382.976l86.016-3.072 6.144-2.048-92.16-19.456v24.576zm-166.912 269.312v88.064q0 12.288 12.288 12.288 8.192 0 9.216-4.096 1.024-1.024 1.024-3.072v-93.184q0-9.216-10.24-9.216-12.288 0-12.288 9.216zm-276.48-347.136v20.48h98.304v11.264h61.44V281.6h19.456v3.072l6.144 2.048v3.072h91.136v8.192h138.24V281.6q0-7.168-5.12-9.216l-5.12-3.072-243.712-50.176zm-338.944 66.56v15.36h32.768v7.168h80.896l4.096 2.048h17.408v-25.6l-2.048-4.096h-78.848v5.12h-54.272zm-248.832 358.4h70.656q13.312 0 23.552-22.528 15.36-40.96-6.144-67.584-7.168-7.168-17.408-11.264t-15.872-4.608-19.456 0-14.848.512q-6.144 3.072-9.216 6.144-11.264 8.192-13.312 28.672-2.048 14.336 0 23.552 1.024 9.216 7.168 19.456l3.072 11.264 3.072 3.072q1.024 4.096-4.096 6.144l-6.144 3.072q-1.024 1.024-1.024 0l-14.336-8.192-11.264-4.096 11.264 12.288zm-409.6-98.304L572.416 563.2l1.024 66.56q0 13.312 12.288 22.528 6.144 5.12 68.608 31.744l70.656 29.696 10.24 3.072q5.12 2.048 8.192 0l25.6-20.48q13.312-24.576 27.648-50.688t19.968-36.352 5.632-11.264q1.024-4.096 4.096-7.168-4.096-31.744-6.144-34.816l-6.144-6.144-40.96-4.096-49.152-22.528v-20.48l-86.016-10.24-29.696 15.36-21.504 3.072v38.912zm-137.216 56.32v21.504h41.984v-19.456zm-109.568 6.144l-5.12 13.312q2.048 2.048 100.352 2.048v-21.504h-93.184z">
          </path>
        </svg>
      );
  }
}

const WeaponSvg = ({ type, color = 'white' }) => (
  <>
    {verifyIcon(type, color)}
  </>
);

export default WeaponSvg;
