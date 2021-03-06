export const state = () => ({
  tabs: [{
    name: 'about.md',
    isOpened: true,
    isMain: true,
    icon: 'md.svg'
  }],
  activeTab: 'about.md'
})


export const mutations = {
  addTab: (state, payload) => {
    const findTab = state.tabs.find(x => x.name === payload);
    let findIcon = '';

    switch (payload) {
      case 'projects.html M':
      case 'projects.html':
        findIcon = 'html.svg';
        break;
      case 'contact.css':
      case 'contact.css M':
        findIcon = 'css.svg';
        break;
      case 'resume.pdf M':
      case 'resume.pdf':
        findIcon = 'pdf.svg';
        break;
      default:
        findIcon = 'md.svg';
        break;
    }
    state.tabs.forEach(tab => {
      tab.isMain = false;
    });

    console.log('findtabic', findTab)
    if (findTab) {
      findTab.isMain = true;
      state.activeTab = payload;
    } else {
      const newTab = {
        name: payload,
        isMain: true,
        isOpened: true,
        icon: findIcon
      }
      state.activeTab = payload;
      state.tabs.push(newTab);
    }

  },
  closeTab: (state, payload) => {
    const index = state.tabs.indexOf(payload);
    if (index > -1) {
      state.tabs.splice(index, 1);

      if (payload.isMain === true) {
        const nextActiveTab = state.tabs.slice(0, 1).shift();
        nextActiveTab.isMain = true;
        state.activeTab = nextActiveTab.name;
      }
    }
  },
  setTabActive: (state, payload) => {
    state.tabs.forEach(tab => {
      tab.isOpened = false;
      if (tab === payload) {
        tab.isOpened = true;
      }
    });
  },
  setContentActive: (state, payload) => {
    console.log('activan', payload)
    state.tabs.forEach(tab => {
      tab.isMain = false;
      if (tab === payload) {
        tab.isMain = true;
        state.activeTab = tab.name;
      }
    });
  },
  setActiveTab: (state) => {
    state.tabs.forEach(tab => {
      if (tab.isMain === true) {
        console.log('daj mi taj tab', tab.name)
        state.activeTab = tab.name
      }
    });
  }
}

export const actions = {
  getActiveTab({
    commit
  }) {
    commit('setActiveTab');
  }
}
