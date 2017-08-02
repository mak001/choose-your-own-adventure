webpackJsonp([0],{

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_graphql_readAdventure__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_components_layout_ViewBox__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_components_layout_TextBox__ = __webpack_require__(153);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var Game = function (_Component) {
  _inherits(Game, _Component);

  function Game() {
    _classCallCheck(this, Game);

    return _possibleConstructorReturn(this, (Game.__proto__ || Object.getPrototypeOf(Game)).apply(this, arguments));
  }

  _createClass(Game, [{
    key: 'render',
    value: function render() {
      var page = void 0;
      if (this.props.data.readAdventurePages !== undefined) {
        page = this.props.data.readAdventurePages.edges[0].node;
      }

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'app' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_components_layout_ViewBox__["a" /* default */], { page: page }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_components_layout_TextBox__["a" /* default */], { page: page })
      );
    }
  }]);

  return Game;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

function mapStateToProps(state) {
  return {
    current: state.game.current
  };
}

Game.propTypes = {
  data: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
    loading: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
    error: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
    readAdventurePages: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
  }).isRequired
};

/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["compose"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react_redux__["connect"])(mapStateToProps), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_4_graphql_readAdventure__["a" /* default */], {
  options: function options(_ref) {
    var current = _ref.current;
    return {
      variables: {
        id: current
      }
    };
  }
}))(Game));

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = reducers;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reducers_gameReducer__ = __webpack_require__(156);




function reducers(client) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])({
    game: __WEBPACK_IMPORTED_MODULE_1_reducers_gameReducer__["a" /* default */],
    client: client.reducer()
  });
}

/***/ }),

/***/ 134:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = goTo;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_actions_ActionTypes__ = __webpack_require__(80);


function goTo(page) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0_actions_ActionTypes__["a" /* default */].GO_TO,
    payload: page
  };
}

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux_thunk__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_apollo_client__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_apollo__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_reducers__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_components_Game__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_main_scss__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_main_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_main_scss__);















var container = document.querySelector('.adventure_game');

var client = new __WEBPACK_IMPORTED_MODULE_4_apollo_client__["default"]({
  networkInterface: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_apollo_client__["createNetworkInterface"])({
    uri: container.dataset.apiUrl,
    opts: {
      credentials: 'same-origin'
    }
  }),
  reduxRootSelector: function reduxRootSelector(state) {
    return state.client;
  }
});

function composedMiddleware() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_redux__["compose"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_redux__["applyMiddleware"])(client.middleware(), __WEBPACK_IMPORTED_MODULE_3_redux_thunk___default.a), typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__() : function (f) {
    return f;
  });
}

var store = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_redux__["createStore"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_reducers__["a" /* default */])(client), composedMiddleware());

__WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
  __WEBPACK_IMPORTED_MODULE_5_react_apollo__["ApolloProvider"],
  { store: store, client: client },
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_components_Game__["a" /* default */], null)
), container);

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_actions_gameActions__ = __webpack_require__(151);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var TextBox = function (_Component) {
  _inherits(TextBox, _Component);

  function TextBox() {
    _classCallCheck(this, TextBox);

    return _possibleConstructorReturn(this, (TextBox.__proto__ || Object.getPrototypeOf(TextBox)).apply(this, arguments));
  }

  _createClass(TextBox, [{
    key: 'renderChoices',
    value: function renderChoices() {
      var _this2 = this;

      var choices = this.props.page.Choices.edges;
      if (choices.length === 1 && (choices[0].node.Content === undefined || choices[0].node.Content === null || choices[0].node.Content === '')) {

        var choice = choices[0];
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'button',
          {
            key: choice.node.ID,
            onClick: function onClick() {
              _this2.props.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_actions_gameActions__["a" /* goTo */])(choice.node.GoTo.ID));
            }
          },
          'Continue...'
        );
      }

      return choices.map(function (choice) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'button',
          {
            key: choice.node.ID,
            onClick: function onClick() {
              _this2.props.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_actions_gameActions__["a" /* goTo */])(choice.node.GoTo.ID));
            }
          },
          choice.node.Content
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'text-box' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'content' },
          this.props.page.Content
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'choices' },
          this.renderChoices()
        )
      );
    }
  }]);

  return TextBox;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

TextBox.defaultProps = {
  page: {
    Content: '',
    Choices: {
      edges: []
    }
  }
};

TextBox.propTypes = {
  page: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.shape({
    Content: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
    Choices: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.shape({
      edges: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.array
    })
  }),
  dispatch: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func.isRequired
};

/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])()(TextBox));

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var ViewBox = function (_Component) {
  _inherits(ViewBox, _Component);

  function ViewBox() {
    _classCallCheck(this, ViewBox);

    return _possibleConstructorReturn(this, (ViewBox.__proto__ || Object.getPrototypeOf(ViewBox)).apply(this, arguments));
  }

  _createClass(ViewBox, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "view-box" });
    }
  }]);

  return ViewBox;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (ViewBox);

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_tag__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql_tag__);
var _templateObject = _taggedTemplateLiteral(['\n  query($id: Int!) {\n    readAdventurePages(ID: $id) {\n      edges {\n        node {\n          ID,\n          Content,\n          Choices {\n            edges {\n              node {\n                ID,\n                Content,\n                GoTo {\n                  ID\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n'], ['\n  query($id: Int!) {\n    readAdventurePages(ID: $id) {\n      edges {\n        node {\n          ID,\n          Content,\n          Choices {\n            edges {\n              node {\n                ID,\n                Content,\n                GoTo {\n                  ID\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_graphql_tag___default()(_templateObject));

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = reducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_actions_ActionTypes__ = __webpack_require__(80);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



var defaultState = {
  current: 1
};

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments[1];

  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0_actions_ActionTypes__["a" /* default */].GO_TO:
      return _extends({}, state, {
        current: action.payload
      });

    default:
      return state;
  }
}

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

var ActionTypes = {
  FETCH_DATA_LOADING: 'FETCH_DATA_LOADING',
  FETCH_DATA_SUCCESS: 'FETCH_DATA_SUCCESS',
  FETCH_DATA_ERROR: 'FETCH_DATA_ERROR',

  GO_TO: 'GO_TO'
};

/* harmony default export */ __webpack_exports__["a"] = (ActionTypes);

/***/ })

},[152]);
//# sourceMappingURL=main.js.map