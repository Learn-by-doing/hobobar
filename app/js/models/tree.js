var app = app || {};

app.models = app.models || {};

app.models.Tree = (function() {

	return Backbone.Model.extend({
		idAttribute: 'id',
		
		defaults: {
			latitude: '',
			longitude: '',
			type: '',
			description: '',
			imagePath: ''
		},

		sync: function(method, model, options) {

			if (method === 'create') {

				var imagePath = model.get('imagePath');
				var fileUploadOptions = new FileUploadOptions();
				fileUploadOptions.fileKey = 'image';
				// !! NOTE !!
				// `imagePath` is the fileURL  from the `navigator.camera.getPicture` function.
				fileUploadOptions.fileName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
				fileUploadOptions.mimeType = 'image/jpeg';
				fileUploadOptions.params = _.pick(model.toJSON(), 'latitude', 'longitude', 'type', 'description');
				fileUploadOptions.chunkedMode = false;

				var fileTransfer = new FileTransfer();
				var onError = options.errors || _.noop;
				var onSuccess = options.success || _.noop;

				fileTransfer.upload(imagePath, app.config.api.baseUrl + '/v1/tree', function() {
					onSuccess();
				}, onError, fileUploadOptions);

			} else {
				// Do nothing.
				// We only support adding new trees.
			}
		}
		
	});

})();