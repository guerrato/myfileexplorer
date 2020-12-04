/*
*   This content is licensed according to the W3C Software License at
*   https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
*
*   File:   Treeitem.js
*
*   Desc:   Setup click events for Tree widget examples
*/

/**
 * ARIA Treeview example
 * @function onload
 * @desc  after page has loaded initialize all treeitems based on the role=treeitem
 */

const clickRefresh = () => {
  const treeitems = document.querySelectorAll('[role="treeitem"]')

  for (let i = 0; i < treeitems.length; i++) {
    treeitems[i].addEventListener('click', event => {
      const treeitem = event.currentTarget
      const label = treeitem.getAttribute('aria-label')

      if (!label) {
        label = treeitem.innerHTML
      }

      if (treeitem.classList.contains('doc')) {
        api('POST', `${baseApi}/readimg`, JSON.stringify({ path: label.trim() })).then(img => {
          document.getElementById('img-preview').style.backgroundImage = `url('${img}')`
          document.getElementById('img-aux').src = img
        })
      }

      event.stopPropagation()
      event.preventDefault()
    })
  }
}

// window.addEventListener('load', function () {
//   clickRefresh()
// })
