import { CollectionView } from "../collectionview";

const CollectionViewPlugin = {
  install: function(Vue, options) {
    Vue.registerElement(
      "CollectionView",
      function() {
        return CollectionView;
      },
      {
        component: require("./component").default
      }
    );
  }
};

export default CollectionViewPlugin;