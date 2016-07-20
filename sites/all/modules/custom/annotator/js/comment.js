// Generated by CoffeeScript 1.10.0
(function() {
  var $,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  $ = jQuery;

  Annotator.Plugin.Comment = (function(superClass) {
    extend(Comment, superClass);

    function Comment() {
      this.updateViewer = bind(this.updateViewer, this);
      return Comment.__super__.constructor.apply(this, arguments);
    }

    Comment.prototype.commentClass = "annotator-comment fa fa-reply";

    Comment.prototype.pluginInit = function() {
      if (!Annotator.supported()) {
        return;
      }
      return this.annotator.viewer.addField({
        load: this.updateViewer
      });
    };

    Comment.prototype.updateViewer = function(field, annotation) {
      var link, n_comments, replies;
      field = $(field);
      n_comments = 0;
      replies = "Replies";
      if (Object.keys(annotation.comments).length > 0) {
        n_comments = Object.keys(annotation.comments).length;
        if (n_comments === 1) {
          replies = "Reply";
        }
      }
      if (annotation.links != null) {
        link = Drupal.settings.annotator_comment.base_root + annotation.links[0].href;
        return field.html("<a href=\"" + link + "#comments\" target=\"_blank\">" + n_comments + " " + replies + "</a>").addClass(this.commentClass);
      } else {
        return field.remove();
      }
    };

    return Comment;

  })(Annotator.Plugin);

}).call(this);
